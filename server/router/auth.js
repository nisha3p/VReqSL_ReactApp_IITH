const { json } = require('express');
const express = require('express');
const jwt = require('jsonwebtoken')
const async = require('hbs/lib/async');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const authenticate = require("../middleware/authenticate")
const cookieParser = require('cookie-parser')
//db
const DB = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connection successful');
}).catch((err) => console.log(err));
//db

//userschema
const User = require('../userSchema')
const SceneJson = require('../jsonSchema')
const sceneData = require('../resources/sceneJson.json')
const sceneSchema = require('../resources/sceneSchema.json')
const Table = require('../tableSchema');
//

//register api

router.post('/signUP', async (req, res) => {
    const { fname, lname, org, email, password, cpassword } = req.body;

    if (!fname || !lname || !org || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the details" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        else if (password !== cpassword) {
            return res.status(422).json({ error: "Password does not match" });
        }
        else {
            const user = new User({ fname, lname, org, email, password, cpassword })
            const userRegister = await user.save()
            if (userRegister) {
                res.status(201).json({ message: "Registraion Successful" });
            }
            else {
                res.status(500).json({ error: "Registration failed" })
            }
        }
    } catch (err) {
        console.log(err);
    }

});



//login route
router.post('/', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "Please fill all the details" });
        }
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwttoken", token, {
                expires: new Date(Date.now() + 86400000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" })
            }
            else {
                res.status(200).json({ message: "Sign In Successful" })
            }
        }
        else {
            res.status(400).json({ error: "Invalid Credentials" })
        }
    } catch (err) {
        console.log(err);
    }

})
//table
router.post('/home', authenticate, async (req, res) => {
    try {
        const { project, owner, stage } = req.body;
        if (!project || !owner || !stage) {
            return res.status(422).json({ error: "Please fill all the details" });
        }
        const username = req.rootUser.email;
        const table = new Table({ project, owner, stage, username: username })
        const tableschema = await table.save()
        if (tableschema) {
            //scene json creation request
            console.log(tableschema._id)
            const sceneJson = new SceneJson({ data: sceneData, schema: sceneSchema, pId: tableschema._id })
            const sceneJsoncreate = await sceneJson.save()
            console.log(sceneJson);
            res.status(201).json({ projectId: tableschema._id });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create project" });
    }

});

//table get api
router.get('/home', authenticate, async (req, res) => {
    try {
        const findUser = await Table.find({ username: req.rootUser.email })
        if (findUser) {
            res.status(201).json({ projects: findUser });
        }
        else {
            res.status(201).json({ projects: [] });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
})

//delete
router.delete('/home/:id', authenticate, async (req, res) => {
    try {
        console.log(req.params.id)
        const deleteProject = await Table.deleteOne({ _id: req.params.id });
        if (deleteProject) {
            res.status(201).json({ message: "Deleted" });
        }
        else {
            res.status(404).json({ message: "Error" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Project Not Found" });
    }
})




//scene
router.get('/home/scene/:id', authenticate, async (req, res) => {
    try {
        const projectDetails = await SceneJson.findOne({ pId: req.params.id });
        if (projectDetails) {
            res.status(201).json({ data: projectDetails.data, schema: projectDetails.schema });
        }
        else {
            res.status(404).json({ message: "Project Not Found" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Project Not Found" });
    }
})
//logout route
router.get('/logout', (req, res) => {
    console.log(`logout page`);
    res.clearCookie('jwttoken', { path: '/' });
    res.send('User')
})
module.exports = router; 
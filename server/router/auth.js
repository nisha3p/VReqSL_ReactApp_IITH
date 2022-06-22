const { json } = require('express');
const express = require('express');
const jwt = require('jsonwebtoken')
const async = require('hbs/lib/async');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const authenticate = require("../middleware/authenticate")

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

//
/*router.get('/', (req, res) => {
    res.send(`Hello world from the server router js`)
});*/

router.post('/signUP', async (req, res) => {
    const { email, password, cpassword } = req.body;
    if (!email || !password || !cpassword) {
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
            const user = new User({ email, password, cpassword })
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

//home page
router.get('/home', authenticate, (req, res) => {
    console.log("home");
    res.send(req.rootUser);
})
//logout route
router.get('/logout', (req, res) => {
    console.log(`logout page`);
    res.clearCookie('jwttoken', { path: '/' });
    res.send('User')
})
module.exports = router; 
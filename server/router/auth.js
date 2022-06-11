const { json } = require('express');
const express = require('express');
const async = require('hbs/lib/async');
const router = express.Router();
const mongoose = require("mongoose");
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
router.get('/', (req, res) => {
    res.send(`Hello world from the server router js`)
});

/* Using promises
router.post('/register', (req, res) => {
    const { email, password, cpassword } = req.body;
    if (!email || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the details" });
    }
    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "Email already exist" });
            }
            const user = new User({ email, password, cpassword })
            user.save().then(() => {
                res.status(201).json({ message: "Registraion Successful" });
            }).catch((err) => res.status(500).json({ error: "Registration failed" }));
        }).catch(err => { console.log(err); });
    //console.log(email);
    //res.json({ message: req.body });

});*/
router.post('/register', async (req, res) => {
    const { email, password, cpassword } = req.body;
    if (!email || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the details" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        const user = new User({ email, password, cpassword })
        const userRegister = await user.save()
        if (userRegister) {
            res.status(201).json({ message: "Registraion Successful" });
        }
        else {
            res.status(500).json({ error: "Registration failed" })
        }
    } catch (err) {
        console.log(err);
    }

});

module.exports = router; 
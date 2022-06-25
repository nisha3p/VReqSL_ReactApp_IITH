const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bycrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    org: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]


})
//hashing the pasasword//
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bycrypt.hash(this.password, 12)
        this.cpassword = await bycrypt.hash(this.cpassword, 12)
    }
    next();
});
//generating token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;

    } catch (err) {
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchema)
module.exports = User;

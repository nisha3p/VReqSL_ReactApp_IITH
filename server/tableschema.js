const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bycrypt = require('bcrypt')

const tableschema = new mongoose.Schema({

    project: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    stage: {
        type: String,
        required: true
    }


})

const Table = mongoose.model('TABLE', tableschema)
module.exports = Table;

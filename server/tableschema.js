const mongoose = require('mongoose');
const tableSchema = new mongoose.Schema({
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
    },
    username: {
        type: String,
        required: true
    }
})
const Table = mongoose.model('TABLE', tableSchema)
module.exports = Table;

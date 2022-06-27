const mongoose = require('mongoose');

const sceneJsonSchema = new mongoose.Schema({
    data: {
        type: Object,
        required: true
    },
    schema: {
        type: Object,
        required: true
    },
    pId: {
        type: String,
        required: true
    }
});

const SceneJson = mongoose.model('SceneJson', sceneJsonSchema);
module.exports = SceneJson;
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    name : {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        required: true,
        default: new Date
    },
    description: {
        type: String,
        required: true,
        default: true,
    },

    foundedAt : {
        type: Date,
        required: true
    },

    activityDomain : {
        type: String,
        required: true
    },

    ActivitiesAndProjects : {
        type: Array, // esperado um array de objetos com as seguites chaves {  title e description }
        default: [{
            title : "",
            description: ""
        }],
    },

    type : {
        type: String,
        default: "",
    },
    cpnj : {
        type: Number,
    }
});
const Host = mongoose.model('host', Schema)
module.exports = Host;

const mongoose = require('mongoose');


const model = {
    
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
        default: "",
    },

    foundedAt : {
        type: Date,
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

    Type : {
        type: String,
        default: "",
    },
    cpnj : {
        type: Number,
        required: true
    },

}

const Schema = new mongoose.Schema(model);
const Host = mongoose.model('host', Schema)
module.exports = { Host , model }

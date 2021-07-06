const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true,
        unique: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: new Date
    },
    description: {
        type: String,
        required: true,
    },

    foundedAt: {
        type: Date,
        required: true
    },

    activityDomain: {
        type: String,
        required: true
    },

    activitiesAndProjects: {
        type: Array,
        validate: array => {
            if (Array.isArray(array)) {
                return array.every(object => typeof object.title == "string" && typeof object.description == "string")
            }
        }
    },

    type: {
        type: String,
        default: "",
    },
    cnpj: {
        type: Number,
        unique: true
    }
});



module.exports = mongoose.model('host', Schema)

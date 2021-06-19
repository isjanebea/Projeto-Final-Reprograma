
const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
        state: {
            required: true,
            type: String,
        },
        city: {
            type: String,
            required: true
        },

        district: {
            type: String,
            required: true
        },
        road: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },

        complement: {
            type: String,
        },
        cep: {
            type: Number,
            required: true
        },
        host: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'host',
            required: true
        }
    });

const Adress = mongoose.model('address', Schema);

module.exports = {
    Adress,
}



const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
        createAt: {
            required: true,
            type: Date,
            default: new Date()
        },
        state: {
            required: true,
            type: String,
        },
        city: {
            type: String,
            required: true
        },
        uf : {
            type: String,
            required: true,
            uppercase: true,
            validade: uf => uf.length==2 
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
            required: true,
        },
        host: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'host',
            required: true
        }
    });


module.exports = mongoose.model('address', Schema);



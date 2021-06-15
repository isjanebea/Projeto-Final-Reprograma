
const mongoose = require('mongoose');

const model = {
    state : {
        required: true,
        type: String,
    },
    city: {
        type: String,
        required: true
    },

    district: {
        type: String,
    },
    road: {
        type: String,
    },
    number: {
        type: Number,
    },

    complement: {
        type: String,
    },
    cep : {
        type: Number,
    },
    host : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'host',
        required: true
    }
}


const Schema = new mongoose.Schema(model);
const Adress = mongoose.model('address', Schema);

module.exports =  { 
    Adress, model
}


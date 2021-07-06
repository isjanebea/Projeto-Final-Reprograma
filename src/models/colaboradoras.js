const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    createAt: {
        required: true,
        type: Date,
        default: new Date()
    },
    name : {
        type : String,
        required: true,
    },
    sobrenome : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required: true,
        match : /.+\@.+\..+/,
        unique: true
    },
    password : {
        type : String,
        required: true,
    },
    code : {
        type: Number,
    }
})


module.exports = mongoose.model('colaboradora', Schema)
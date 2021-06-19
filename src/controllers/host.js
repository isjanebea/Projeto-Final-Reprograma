const { Host, model } = require('../models/host');
const utils = require('../utils/models')
const mongoose = require('mongoose');

// nesse caso eu não trabalho com getAll aqui, somente com   patch e replace


const getAll = async (req, res) => {
    try {
        const hosts = await Host.find()
        res.status(200).json(hosts)
    } catch (error) {
        const { message } = error;
        res.status(500).json(message)
    }
}


const verifyHost = async (req, res, next) => {
    const { name, cnpj } = req.modelData;
    
    const existsHost = await Host.findOne({name, cnpj});

    if (existsHost) {
        res.status(409).json({ message : "Abrigo já cadastrado", existsHost})
        return res.end();
    }

    return next();
}


module.exports = {
    getAll,
    verifyHost
}

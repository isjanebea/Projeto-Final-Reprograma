const Host = require('../models/host');
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

const create = async (req, res, next) => {
    const newHost = new Host({
        _id : mongoose.Schema.Types.ObjectId,
        ...req.register.host 
    })
    try {

        const host = await newHost.save();
        return res.status(201).json({ message: 'Salvo com sucesso!', host })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}




const verifyConflit = async (req, res, next) => {
    const { name, cnpj } = req.register.host;

    const existsHost = await Host.findOne({ name, cnpj });

    if (existsHost) {
        res.status(409).json({ message: "Abrigo já cadastrado" })
        return res.end();
    }
    req.model = existsHost;
    return next();
}

const verifyHostBody = async (req, res, next) => {
    const {
        name, description, foundedAt, activityDomain,
        ActivitiesAndProjects, type, cnpj
    } = req.body;

    req.register = {
        host: {
            name, description, foundedAt, activityDomain,
            ActivitiesAndProjects, type, cnpj
        }
    }

    if (!req.body) {
        return res.status(400).json({ message: "Por favor, enviar dados via Body" })
    }

    return next();

}
module.exports = {
    getAll,
    verifyConflit,
    verifyHostBody,
    create
}

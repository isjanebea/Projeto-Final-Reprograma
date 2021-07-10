const Host = require('../models/host');
const mongoose = require('mongoose');
const dictionary = require('../utils/dictionary');

// nesse caso eu não trabalho com getAll aqui, somente com   patch e replace


const getAll = async (req, res) => {
    try {
        const hosts = await Host.find()
        res.status(200).json(hosts)
    } catch (error) {
        res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}


const showById = async (req, res) => {
    try {
        const host = await Host.findById(req.params.id);
        return res.status(200).json(host)
    } catch (error) {
        return res.status(400).json({ message: dictionary.serverError, error: error.message })
    }
}


const create = async (req, res) => {
    const newHost = new Host({
        _id: new mongoose.Types.ObjectId(),
        ...req.register.host
    })
    try {

        const host = await newHost.save();
        return res.status(201).json({ message: dictionary.create, data : host })
    } catch (error) {
        return res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}



const deleteById = async (req, res) => {
    const host = req.modelHost;

    try {
        let deletedHost = await host.delete();
        return res.status(200).json({ message: dictionary.delete, data : deletedHost })
    } catch (error) {
        return res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}

const replaceById = async (req, res) => {

    try {
        let replaceHost = await Host.replaceOne({ _id: req.params.id }, req.register.host);
        if (replaceHost.nModified == 0) {
            throw Error(dictionary.serverError)
        }
        return res.status(200).json({ message : dictionary.replace, data : req.modelHost })
    } catch (error) {
        return res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}


const updateById = async (req, res) => {

    try {
        let updateHost = await Host.updateOne({ _id: req.params.id }, req.register.host);
        console.log(updateHost)
        if (updateHost.ok == 0) {
            throw Error(dictionary.serverError)
        }
        else if (updateHost.nModified==0) {
            return res.status(304).json({ message : null});
        }
        return res.status(200).json({ message : dictionary.update, data : req.modelHost })
    } catch (error) {
        return res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}



module.exports = {
    getAll,
    create,
    deleteById,
    replaceById,
    updateById,
    showById
}

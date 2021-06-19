const Adress = require('../models/adress');
const mongoose = require('mongoose');

// posso padronizar os erros

const getAll = async (req, res) => {
    try {
        const adress = await Adress.find(req.query).populate('host');
        return res.status(200).json(adress)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
     getAll,
}
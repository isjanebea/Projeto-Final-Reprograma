const { Adress, model } = require('../models/adress');
const { Host } = require('../models/host');
const utils = require('../utils/models')
const mongoose = require('mongoose');



const getAll = async (req, res) => {
    try {
        const adress = await Adress.find().populate('host');
       return res.status(200).json(adress)
    } catch (error) {
       return res.status(500).json({ message : error.message })
    }
}



module.exports = {
    getAll
}
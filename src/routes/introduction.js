const express = require('express');
const router = express.Router();
const Colaboradoras = require('../models/colaboradoras');
const Host = require('../models/host');
const api = require('../../package.json');

router.get("/", async (req, res) => {
    try {
        let colaboradoras = await Colaboradoras.find()
        let host = await Host.find()


        return res.status(200).json({
            message : `Bem vindes a  API Ponte Arco Iris`,
            version: api.version,
            description : api.description,
            author : api.author,
            license : api.license,
            base_de_dados : `Atualmente possuimos ${colaboradoras.length} colaboradoras na nossa base de dados e ${host.length} casas de acolhimento`
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})


module.exports = router;
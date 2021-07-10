const dictionary = require('../utils/dictionary');
const Adress = require('../models/adress');
/* adress middlwares */ module.exports = {
    async findById(req, res, next) {
        try {
            const adress = await Adress.findById(req.params.id);
            req.modelAdress = adress;
            if (adress != null) {
                return next();
            }

            res.status(400).json({message :  dictionary.badRequest});

        } catch (error) {
            return res.status(500).json({ message: dictionary.serverError, error: error.message })
        }
    },

    async verifyAdressBody(req, res, next) {
        const {
            district, city, state, road, number, cep, complement, host, uf
        } = req.body;

        req.register = {
            adress: {
                district, city, state, road, number, cep, complement, host, uf
            }
        }

        if (!req.body) {
            return res.status(400).json({ message: dictionary.notBody })
        }

        return next();

    }
}
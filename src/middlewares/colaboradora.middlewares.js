
const Colaboradoras = require('../models/colaboradoras');
/* adress middlwares */ module.exports = {
    async findById(req, res, next) {
        try {
            const colaboradora = await Colaboradoras.findById(req.params.id);
            req.modelColaboradora = colaboradora;
            if (colaboradora != null) {
                return next();
            }

            throw Error('Descupa não foi possivel localizar o endereço')

        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    },

    verifyBody(req, res, next) {
        const {
            name, sobrenome, email, password
        } = req.body;

        if (/.+\@.+\..+/.test(email) === false) {
            return res.status(400).json({ message: "Formato de email invalido" })
        }
        req.register = {
            colaboradora: {
                name, sobrenome, email, password
            }
        }

        if (!req.body) {
            return res.status(400).json({ message: "Por favor, enviar dados via Body" })
        }

        return next();

    }
}
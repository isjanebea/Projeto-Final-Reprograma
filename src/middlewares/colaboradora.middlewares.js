
const notEmail= (email) => !/.+\@.+\..+/.test(email);
const dictionary = require('../utils/dictionary');
const Colaboradoras = require('../models/colaboradoras');
/* adress middlwares */ module.exports = {
    async findById(req, res, next) {
        try {
            const colaboradora = await Colaboradoras.findById(req.params.id);
            req.modelColaboradora = colaboradora;
            if (colaboradora != null) {
                return next();
            }

            res.status(400).json({message :  dictionary.badRequest});

        } catch (error) {
            return res.status(500).json({ message: dictionary.serverError, error: error.message })
        }
    },

    verifyBody(req, res, next) {
        const {
            name, sobrenome, email, password
        } = req.body;

        
        if (notEmail(email)) {
            return res.status(400).json({ message: dictionary.notEmail })
        }

        
        req.register = {
            colaboradora: {
                name, sobrenome, email, password
            }
        }

        if (!req.body) {
            return res.status(400).json({ message: dictionary.notBody })
        }

        return next();

    },
    verifyEmail(req, res, next) {
        if (notEmail(req.body.email)) {
            return res.status(400).json({ message: dictionary.notEmail })
        }
        next();
    },
    verifyCode(req, res, next) {
        if (/[0-9]{5}/.test(req.body.code)==false) {
            return res.status(400).json({ message: dictionary.codeNaN })
        }
        else if (req.body.password==null) {
            return res.status(400).json({ message: dictionary.notNewPassowrd })
        }
        next();
    }
}


const notEmail= (email) => !/.+\@.+\..+/.test(email);

const Colaboradoras = require('../models/colaboradoras');
/* adress middlwares */ module.exports = {
    async findById(req, res, next) {
        try {
            const colaboradora = await Colaboradoras.findById(req.params.id);
            req.modelColaboradora = colaboradora;
            if (colaboradora != null) {
                return next();
            }

            throw Error('Descupa, mas não conseguimos encontrar')

        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    },

    verifyBody(req, res, next) {
        const {
            name, sobrenome, email, password
        } = req.body;

        
        if (notEmail(email)) {
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

    },
    verifyEmail(req, res, next) {
        if (notEmail(req.body.email)) {
            return res.status(400).json({ message: "Formato de email invalido" })
        }
        next();
    },
    verifyCode(req, res, next) {
        if (/[0-9]{5}/.test(req.body.code)==false) {
            return res.status(400).json({ message: "Formato do codico invalido" })
        }
        else if (req.body.password==null) {
            return res.status(400).json({ message: "Obrigatorio enviar a nova senha"})
        }
        next();
    }
}

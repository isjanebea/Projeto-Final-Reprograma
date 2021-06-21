const jwt = require('jsonwebtoken');
const Colaboradoras = require('../models/colaboradoras')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const login = async (req, res) => {

    const colaboradora = await Colaboradoras.findOne({ email: req.body.email })

    if (colaboradora== null) {
        return res.status(400).json({ message : "Usuario ou Senha invalida!"})
    }
    let user;
    if (bcrypt.compareSync(req.body.password, colaboradora.password)) {
        user = {
            nome: colaboradora.nome,
            email: colaboradora.email
        }
        jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '7d' }, (error, token) => {
            if (error) {
                res.status(500).json({ message: error.message })
            }
            res.status(201).json({ token: token })
        })
    }
    else {
        res.status(400).json({ message: "Usuario ou senha invalida!" })
    }
}

const register = async (req, res) => {
    req.register.colaboradora.password = bcrypt.hashSync(req.body.password, 10)
    const colaboradora = new Colaboradoras({
        _id: new mongoose.Types.ObjectId(),
        ...req.register.colaboradora
    })

    try {
        let saveColaboradora = await colaboradora.save();
        return res.status(201).json({ message: 'salvo com sucesso', data: saveColaboradora })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const verifyBody = (req, res, next) => {
    const { name, sobrenome, email, password } = req.body;
    if (/.+\@.+\..+/.test(email) === false) {
        return res.status(400).json({ message: "Formato de email invalido" })
    }

    const register = { colaboradora: { name, sobrenome, email, password } }
    req.register = register;
    next();
}


module.exports = {
    login,
    register,
    verifyBody
}
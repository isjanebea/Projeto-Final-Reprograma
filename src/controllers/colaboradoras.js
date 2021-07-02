const jwt = require('jsonwebtoken');
const Colaboradoras = require('../models/colaboradoras')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const all = async (req, res) => {
    const allColaboradoras = await Colaboradoras.find();
    return res.status(200).json(allColaboradoras)
}
const login = async (req, res) => {

    const colaboradora = await Colaboradoras.findOne({ email: req.body.email })

    if (colaboradora == null) {
        return res.status(400).json({ message: "Usuario ou Senha invalida!" })
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

const hashSenha = (password) => bcrypt.hashSync(password, 10);

const register = async (req, res) => {
    const colaboradora = new Colaboradoras({
        _id: new mongoose.Types.ObjectId(),
        ...req.register.colaboradora
    })

    colaboradora.password = hashSenha(req.register.colaboradora.password)

    try {
        let saveColaboradora = await colaboradora.save();
        return res.status(201).json({ message: 'salvo com sucesso', data: saveColaboradora })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const replaceById = async (req, res) => {

    if (req.register.colaboradora.password) {
        req.register.colaboradora.password = hashsenha(req.register.colaboradora.password)
    }

    try {
        let replaceColaboradora = await Colaboradoras.replaceOne({ _id: req.params.id }, req.register.colaboradora);
        if (replaceColaboradora.nModified == 0) {
            throw Error('Descupa ocorreu um erro.')
        }
        return res.status(200).json({ message: "Substituido com sucesso!", data: req.modelColaboradora })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


const updateById = async (req, res) => {
    if (req.register.colaboradora.password) {
        req.register.colaboradora.password = hashsenha(req.register.colaboradora.password)
    }
    try {
        let updateColaboradora = await Colaboradoras.updateOne({ _id: req.params.id }, req.register.colaboradora);
        if (updateColaboradora.ok == 0) {
            throw Error('Descupa ocorreu um erro.')
        }
        else if (updateColaboradora.nModified == 0) {
            return res.status(304).json({ message: "Nenhuma alteracao!" });
        }
        return res.status(200).json({ message: "Substituido com sucesso!", data: req.modelColaboradora })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


module.exports = {
    login,
    register,
    all,
    replaceById,
    updateById
}
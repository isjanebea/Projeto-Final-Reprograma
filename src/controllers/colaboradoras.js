const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');


const utils = require('../utils/helper')
const { hashPassword, notPassword } = require('../utils/bcrypt')
const Colaboradoras = require('../models/colaboradoras')
const dictionary = require('../utils/dictionary');

const getAll = async (req, res) => {
    try {
        const colaboradoras = await Colaboradoras.find({}, { password: false, code: false });
        return res.status(200).json(colaboradoras)

    } catch (error) {
        res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}


const showById = async (req, res) => {
    try {
        const colaboradoras = await Colaboradora.findById(req.params.id);
        return res.status(200).json(colaboradoras)
    } catch (error) {
        return res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}


const getFilter = async (req, res) => {
    let filter = {};
    Object.keys(req.query).forEach(key => {
        filter[key] = req.query[key] || "";
    })

    try {
        let colaboradoras = await Colaboradoras.find({}, { password: false, code: false })

        colaboradoras = colaboradoras
            .filter(colaboradore => colaboradore.name.toLowerCase().includes(filter.name.toLowerCase()))
            .filter(({ email }) => {
                email = email.toLowerCase();
                let busca = email.toLowerCase();
                return email.includes(busca);
            });


        if (colaboradoras == null || colaboradoras.length == 0) {
            return res.status(400).json({ message: dictionary.filter });
        }
        return res.status(200).json(colaboradoras)

    } catch (error) {
        res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}





const register = async (req, res) => {
    const colaboradora = new Colaboradoras({
        _id: new mongoose.Types.ObjectId(),
        ...req.register.colaboradora
    })

    colaboradora.password = hashPassword(req.register.colaboradora.password)

    try {
        let saveColaboradora = await colaboradora.save();
        return res.status(201).json({ message: dictionary.create, data: saveColaboradora })
    } catch (error) {
        return res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}

const replaceById = async (req, res) => {

    if (req.register.colaboradora.password) {
        req.register.colaboradora.password = hashPassword(req.register.colaboradora.password)
    }

    try {
        let replaceColaboradora = await Colaboradoras.replaceOne({ _id: req.params.id }, req.register.colaboradora);
        if (replaceColaboradora.nModified == 0) {
            throw Error(dictionary.serverError)
        }
        return res.status(200).json({ message: dictionary.replace, data: req.modelColaboradora })
    } catch (error) {
        return res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}



const updateById = async (req, res) => {
    if (req.register.colaboradora.password) {
        req.register.colaboradora.password = hashPassword(req.register.colaboradora.password)
    }
    try {
        let updateColaboradora = await Colaboradoras.updateOne({ _id: req.params.id }, req.register.colaboradora);
        if (updateColaboradora.ok == 0) {
            throw Error(dictionary.serverError)
        }
        else if (updateColaboradora.nModified == 0) {
            return res.status(304).json({ message: null });
        }
        return res.status(200).json({ message: dictionary.update, data: req.modelColaboradora })
    } catch (error) {
        return res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}


const deleteById = async (req, res) => {
    try {
        const colaboradora = await Colaboradoras.findByIdAndDelete(req.params.id)
        if (colaboradora == null) {
            return res.status(304).json({ message: null });
        }
        return res.status(200).json({ message: dictionary.delete })
    } catch (error) {
        return res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}


/*
 * 
 *   Recursos
 * 
 *  
*/

const login = async (req, res) => {

    const colaboradora = await Colaboradoras.findOne({ email: req.body.email })

    if (colaboradora == null) {
        return res.status(400).json({ message: dictionary.notLogin })
    }
    let user;
    if (bcrypt.compareSync(req.body.password, colaboradora.password)) {
        user = {
            name: colaboradora.name,
            email: colaboradora.email

        }
        jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '7d' }, (error, token) => {
            if (error) {
                res.status(401).json({ message: dictionary.notAllowed })
            }
            res.status(201).json({ token: token, data: user })
        })
    }
    else {
        res.status(400).json({ message: dictionary.notLogin })
    }
}



const recorvy = async (req, res, next) => {
    try {
        const colaboradora = await Colaboradoras.findOne({ email: req.body.email }, { name: true, email: true });
        if (colaboradora == null) {
            return res.status(400).json({ message: dictionary.badRequest });
        }
        colaboradora.code = utils.code();

        await colaboradora.save();
        req.userRecorvy = {
            name: colaboradora.name,
            email: colaboradora.email,
            code: colaboradora.code
        }
        next(); // services>email.js>recorvyEmail
    } catch (error) {
        res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}



const replacePassword = async (req, res) => {
    try {
        const colaboradora = await Colaboradoras.findOne({ email: req.body.email, code: req.body.code })
        if (colaboradora == null) {
            return res.status(400).json({ message: dictionary.code });
        }
        colaboradora.password = hashPassword(req.body.password);
        delete colaboradora.code;
        colaboradora.save();
        return res.status(200).json({ message: dictionary.updateSenha })
    } catch (error) {
        return res.status(500).json({ message: dictionary.serverError, error: error.message })
    }
}


module.exports = {
    login,
    register,
    getAll,
    replaceById,
    updateById,
    recorvy,
    replacePassword,
    deleteById,
    getFilter,
    showById
}
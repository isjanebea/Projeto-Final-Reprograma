const mongoose = require('mongoose');
const { Host, model: hostModel } = require('../models/host');
const { Adress, model: adressModel } = require('../models/adress')
const utils = require('../utils/models')

const hostCreate = ({ modelData : { host : hostModel}}) => {
    
    // verificar se o host ja existe num middlware

    const newHost = new Host({
        _id: new mongoose.Types.ObjectId(),
        ...hostModel
    });

        return newHost;
}

const adressCreate = ({ modelData : { adress : adressModel}}, id) => {
    const newAdress = new Adress({
        _id: new mongoose.Types.ObjectId(),
        host : id,
        ...adressModel
    });
        return newAdress;
}

const verifyData = (req, res, next) => {
    const [requireHost , host ] = utils.checkSchema(hostModel, req);
    const [requireAdress, adress ] = utils.checkSchema(adressModel, req);

    if (!requireAdress) {
        res.status(400).json(adress)
        return res.end();
    }

    if (!requireHost) {
        res.status(400).json(host)
        return res.end();
    }
    
    const register = {
        adress, 
        host
    }


    req.modelData = register;
    
    next();
}



const create = async (req, res) => {

    const newHost =  hostCreate(req);
    const newAdress = adressCreate(req, newHost._id)
    try {

        await newAdress.save();
        await newHost.save();

        res.status(201).json({
            newHost,
            newAdress
        })

    } catch (error) {
        res.status(500).json({ message : error.message })
    }
}

module.exports = {
    create,
    verifyData,
};
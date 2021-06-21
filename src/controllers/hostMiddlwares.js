const Host = require('../models/host')

/** middlwares */ module.exports = {


    async findById(req, res, next) {
        try {
            const host = await Host.findById(req.params.id);
            req.modelHost = host;
            if (host != null) {
                return next();
            }

            throw Error('Descupa não foi possivel localizar o host')

        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    },

    async verifyHostBody(req, res, next) {
        const {
            name, description, foundedAt, activityDomain,
            activitiesAndProjects, type, cnpj
        } = req.body;

        req.register = {
            host: {
                name, description, foundedAt, activityDomain,
                activitiesAndProjects, type, cnpj
            }
        }

        if (!req.body) {
            return res.status(400).json({ message: "Por favor, enviar dados via Body" })
        }

        return next();

    },


    async verifyConflit(req, res, next) {
        const { name, cnpj } = req.register.host;
        try {

            let hosts = await Host.find();
            filterHost = hosts.filter(host => host.cnpj === cnpj || host.name === name)


            if (filterHost.length >= 1 && /put$||post$||update$/.test(req.method)) {
                res.status(409).json({ message: "Abrigo já cadastrado" })
                return res.end();
            }
            return next();
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}
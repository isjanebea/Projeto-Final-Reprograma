const Host = require('../models/host')
const dictionary = require('../utils/dictionary');
/** middlwares */ module.exports = {


    async findById(req, res, next) {
        try {
            const host = await Host.findById(req.params.id);
            req.modelHost = host;
            if (host != null) {
                return next();
            }

           res.status(400).json({message :  dictionary.badRequest });

        } catch (error) {
            return res.status(500).json({ message: dictionary.serverError, error: error.message })
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
            return res.status(400).json({ message: dictionary.notBody })
        }

        return next();

    },


    async verifyConflit(req, res, next) {
        const { name, cnpj } = req.register.host;
        try {

            let hosts = await Host.find();
            filterHost = hosts.filter(host => (host.cnpj === cnpj || host.name === name) && host._id != req.params.id)


            if (filterHost.length >= 1 && /put$||post$||update$/.test(req.method)) {
                res.status(409).json({ message: dictionary.conflict })
                return res.end();
            }
            return next();
        } catch (error) {
            return res.status(500).json({ message: dictionary.serverError, error: error.message })
        }
    }
}
const jwt = require('jsonwebtoken');


module.exports = {
    authentication(req, res, next) {

        try {
            const authorization = req.get('authorization');

            if (authorization == null) {
                throw Error()
            }
            
            let token =  authorization.split(" ")[1];
             jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
                req.usuarioAutenticado = data;
                if (error) {
                   return res.status(400).json({ message: "Não autorizado ou token invalida" });
                }
                return next();
            })
        } catch (error) {
            return res.status(403).json({ message: "Não autorizado ou token invalida" })
        }
    }
}
const express = require('express');
const router = express.Router();
const controller = require('../controllers/adress')
const middlewares = require('../middlewares/adress.middlewares')
const { auth } = require('../services/authJwt')
/** base URL  /localizacao/ */
router.get("/estados", controller.adressRegisted)

router
    .route("/")
    .post(auth, middlewares.verifyAdressBody, controller.create)
    .get(controller.getAll)

router
    .route("/:id")
    .get(controller.showById)
    .put(auth, middlewares.verifyAdressBody, controller.replaceById)
    .patch(auth, middlewares.verifyAdressBody, controller.updateById)
    .delete(auth, middlewares.findById, controller.deleteById)
   


module.exports = router;
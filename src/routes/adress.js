const express = require('express');
const router = express.Router();
const controller = require('../controllers/adress')
const middlwares = require('../controllers/adressMiddlwares')
const { auth } = require('../data/authJwt')
/** base URL  /localizacao/ */
router.get("/estados", controller.adressRegisted)

router
    .route("/")
    .post(auth, middlwares.verifyAdressBody, controller.create)
    .get(controller.getAll)

router
    .route("/:id")
    .get(controller.showById)
    .put(auth, middlwares.verifyAdressBody, controller.replaceById)
    .patch(auth, middlwares.verifyAdressBody, controller.updateById)
    .delete(auth, middlwares.findById, controller.deleteById)
   


module.exports = router;
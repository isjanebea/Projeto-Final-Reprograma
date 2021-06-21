const express = require('express');
const router = express.Router();
const controller = require('../controllers/adress')
const middlwares = require('../controllers/adressMiddlwares')
/** base URL  /localizacao/ */
router
    .route("/")
    .post(middlwares.verifyAdressBody, controller.create)
    .get(controller.getAll)

router
    .route("/:id")
    .get(controller.showById)
    .put(middlwares.verifyAdressBody, controller.replaceById)
    .patch(middlwares.verifyAdressBody, controller.updateById)
    .delete(middlwares.findById, controller.deleteById)


module.exports = router;
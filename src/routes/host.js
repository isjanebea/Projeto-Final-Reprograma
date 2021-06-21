const express = require('express');
const router = express.Router();
const controller = require('../controllers/host');
const middlwares = require('../controllers/hostMiddlwares')

/** base URL  /acolhida/ */

router.route("/")
    .get(controller.getAll)
    .post(middlwares.verifyHostBody, middlwares.verifyConflit, controller.create)

router.route("/:id")
    .get(controller.showById)
    .put(middlwares.verifyHostBody, middlwares.findById, controller.replaceById)
    .patch(middlwares.verifyHostBody, middlwares.findById, controller.updateById)
    .delete(middlwares.findById, controller.deleteById)

module.exports = router;
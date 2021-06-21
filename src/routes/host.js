const express = require('express');
const router = express.Router();
const controller = require('../controllers/host');
const middlwares = require('../controllers/hostMiddlwares')
const { auth } = require('../data/authJwt')
/** base URL  /acolhida/ */

router.route("/")
    .get(controller.getAll)
    .post(auth, middlwares.verifyHostBody, middlwares.verifyConflit, controller.create)

router.route("/:id")
    .get(controller.showById)
    .put(auth, middlwares.verifyHostBody, middlwares.findById, controller.replaceById)
    .patch(auth, middlwares.verifyHostBody, middlwares.findById, controller.updateById)
    .delete(auth, middlwares.findById, controller.deleteById)

module.exports = router;



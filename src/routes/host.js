const express = require('express');
const router = express.Router();
const controller = require('../controllers/host');
const middlewares = require('../middlewares/host.middlewares')
const { auth } = require('../services/authJwt')
/** base URL  /acolhida/ */

router.route("/")
    .get(controller.getAll)
    .post(auth, middlewares.verifyHostBody, middlewares.verifyConflit, controller.create)

router.route("/:id")
    .get(controller.showById)
    .put(auth, middlewares.verifyHostBody, middlewares.findById, controller.replaceById)
    .patch(auth, middlewares.verifyHostBody, middlewares.findById, controller.updateById)
    .delete(auth, middlewares.findById, controller.deleteById)

module.exports = router;



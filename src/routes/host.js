const express = require('express');
const router = express.Router();
const controller = require('../controllers/host');
const middlewares = require('../middlewares/host.middlewares')
const { authentication } = require('../services/authentication')
/** base URL  /acolhida/ */

router.route("/")
    .get(controller.getAll)
    .post(authentication, middlewares.verifyHostBody, middlewares.verifyConflit, controller.create)

router.route("/:id")
    .get(controller.showById)
    .put(authentication, middlewares.verifyHostBody, middlewares.findById, controller.replaceById)
    .patch(authentication, middlewares.verifyHostBody, middlewares.findById, controller.updateById)
    .delete(authentication, middlewares.findById, controller.deleteById)

module.exports = router;



const express = require('express');
const router = express.Router();

const controller = require('../controllers/colaboradoras');
const middlewares = require('../middlewares/colaboradora.middlewares');
const { authentication } = require('../services/authentication')

router.all('/*', authentication)

router.get("/seach", controller.getFilter);

router.route("/")
    .get(controller.getAll)
    .post(middlewares.verifyBody, controller.register);

router.route("/:id")
    .get(middlewares.findById, controller.showById)
    .patch(middlewares.verifyBody, controller.updateById)
    .put(middlewares.verifyBody, controller.replaceById)
    .delete(controller.deleteById);

module.exports = router;
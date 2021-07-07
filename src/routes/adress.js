const express = require('express');
const router = express.Router();
const controller = require('../controllers/adress')
const middlewares = require('../middlewares/adress.middlewares')
const { authentication } = require('../services/authentication')
/** base URL  /localizacao/ */
router.get("/estados", controller.adressRegisted)

router
    .route("/")
    .post(authentication, middlewares.verifyAdressBody, controller.create)
    .get(controller.getAll)

router
    .route("/:id")
    .get(controller.showById)
    .put(authentication, middlewares.verifyAdressBody, controller.replaceById)
    .patch(authentication, middlewares.verifyAdressBody, controller.updateById)
    .delete(authentication, middlewares.findById, controller.deleteById)
   


module.exports = router;
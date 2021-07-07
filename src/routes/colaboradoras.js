const express = require('express');
const router = express.Router();

const controller = require('../controllers/colaboradoras');
const middlewares = require('../middlewares/colaboradora.middlewares');
const { recorvyEmail } = require('../services/email');
const { authentication } = require('../services/authentication')

router.all('/', authentication)

router.get("/", controller.all)
router.post("/register", middlewares.verifyBody, controller.register);

router.post("/login", middlewares.verifyEmail, controller.login);

router.post("/recorvy", middlewares.verifyEmail, controller.recorvy, recorvyEmail);
router.patch("/recorvy/password", middlewares.verifyBody, middlewares.verifyCode, controller.replacePassword);


router.route("/:id")
    .patch(middlewares.verifyBody, controller.updateById)
    .put(middlewares.verifyBody, controller.replaceById)
    .delete(controller.deleteById)

module.exports = router;
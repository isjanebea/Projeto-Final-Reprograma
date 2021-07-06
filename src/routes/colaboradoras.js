const express = require('express');
const router = express.Router();
const controller = require('../controllers/colaboradoras');
const middlewares = require('../middlewares/colaboradora.middlewares');
const { recorvyEmail } = require('../services/email')
router.get("/", controller.all)
router.post("/login", controller.login);
router.post("/recorvy", controller.recorvy, recorvyEmail);
router.patch("/recorvy/password", controller.replacePassword);
router.post("/register", middlewares.verifyBody, controller.register);
router.patch("/:id", middlewares.verifyBody, controller.updateById)
router.put("/:id", middlewares.verifyBody, controller.replaceById)

module.exports = router;
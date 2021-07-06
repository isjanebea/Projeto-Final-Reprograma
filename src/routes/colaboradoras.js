const express = require('express');
const router = express.Router();
const controller = require('../controllers/colaboradoras');
const middlwares = require('../controllers/colaboradoraMiddlwares');
const { recorvyEmail } = require('../services/email')
router.get("/", controller.all)
router.post("/login", controller.login);
router.post("/recorvy", controller.recorvy, recorvyEmail);
router.post("/recorvy/password", controller.replacePassword);
router.post("/register", middlwares.verifyBody, controller.register);
router.patch("/:id", middlwares.verifyBody, controller.updateById)
router.put("/:id", middlwares.verifyBody, controller.replaceById)

module.exports = router;
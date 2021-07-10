const express = require('express');
const router = express.Router();

const controller = require('../controllers/colaboradoras');
const middlewares = require('../middlewares/colaboradora.middlewares');
const { recorvyEmail } = require('../services/email');

router.post("/", middlewares.verifyEmail, controller.recorvy, recorvyEmail);
router.patch("/", middlewares.verifyBody, middlewares.verifyCode, controller.replacePassword);

module.exports = router;
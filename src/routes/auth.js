const express = require('express');
const router = express.Router();

const controller = require('../controllers/colaboradoras');
const middlewares = require('../middlewares/colaboradora.middlewares');

router.post("/", middlewares.verifyEmail, controller.login);


module.exports = router;
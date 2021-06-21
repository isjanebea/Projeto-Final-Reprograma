const express = require('express');
const router = express.Router();
const controller = require('../controllers/colaboradoras');

router.post("/login", controller.login);
router.post("/register", controller.verifyBody, controller.register)

module.exports = router;
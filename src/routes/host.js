const express = require('express');
const router = express.Router();
const controller = require('../controllers/host');
const utils = require('../utils/helper')

router
    .route("/")
    .get(controller.getAll)
    .post(controller.verifyHostBody, controller.verifyConflit, controller.create, utils.error)




module.exports = router;
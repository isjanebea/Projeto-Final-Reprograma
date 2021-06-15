const express = require('express');
const router = express.Router();
const controllers = require('../controllers/host')

router
    .route("/")
    .get(controllers.getAll)




module.exports = router;
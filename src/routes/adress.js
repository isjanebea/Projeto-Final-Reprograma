const express = require('express');
const router = express.Router();
const controllers = require('../controllers/adress')

router
    .route("/")
    .get(controllers.getAll)




module.exports = router;
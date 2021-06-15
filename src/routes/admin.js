const express =  require('express');
const router = express.Router()
const controller = require('../controllers/admin')
const { verifyHost } = require('../controllers/host')

router.post("/register", controller.verifyData, verifyHost, controller.create)
module.exports = router;
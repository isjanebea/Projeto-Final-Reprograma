const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

router.get("/", (req, res) => {
    fs.readFile(path.join(__dirname, '../../README.md'), 'utf-8',  (err, data) => {
        if(err) {
           return res.status(500).json({ message: err.message })
        }
       return res.status(200).send(data) 
    });
    
})

module.exports = router;
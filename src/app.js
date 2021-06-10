const express =  require('express')






const app = express();




app.use(express.urlencoded({ extends : true}))
app.use(express.json())








module.exports = app;
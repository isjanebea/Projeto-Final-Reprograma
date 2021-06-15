const express =  require('express')
const database = require('./data/database')

const host = require('./routes/host')
const adress = require('./routes/adress')
const admin = require('./routes/admin')



const app = express();



app.use(express.json())
database.connect();



app.use("/cantinho", host)
app.use("/localizacao", adress)
app.use("/admin", admin)

module.exports = app;



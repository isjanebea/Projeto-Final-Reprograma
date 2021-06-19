const express =  require('express')
const cors = require('cors')

const database = require('./data/database')


/** ROTAS */
const host = require('./routes/host')
const adress = require('./routes/adress')
const admin = require('./routes/admin')



const app = express();



app.use(express.json())
app.use(cors())
database.connect();



app.use("/cantinho", host)
app.use("/localizacao", adress)
app.use("/admin", admin)

module.exports = app;



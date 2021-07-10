const express =  require('express')
const cors = require('cors')
const database = require('./data/database')

/** ROTAS */
const host = require('./routes/host')
const adress = require('./routes/adress')
const colaboradoras = require('./routes/colaboradoras')
const authorization = require('./routes/auth')
const recorvy = require('./routes/recorvy')
const introduction = require('./routes/introduction')

const app = express();

app.use(express.json())
app.use(cors())

database.connect();

const baseUrl = "/api/v1";

app.use(baseUrl + "/lares", host)
app.use(baseUrl + "/enderecos", adress)
app.use(baseUrl +"/admin", colaboradoras)
app.use(baseUrl +"/auth", authorization)
app.use(baseUrl +"/recorvy", recorvy)
app.use(baseUrl +"/",  introduction)


module.exports = app;



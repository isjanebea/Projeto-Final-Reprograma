const express =  require('express')
const cors = require('cors')
const database = require('./data/database')

/** ROTAS */
const host = require('./routes/host')
const adress = require('./routes/adress')
const colaboradoras = require('./routes/colaboradoras')
const documentation = require('./routes/doc')
const introduction = require('./routes/introduction')

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');



app.use(express.json())
app.use(cors())

database.connect();

const baseUrl = "/api/v1";


app.use(baseUrl + "/lares", host)
app.use(baseUrl + "/enderecos", adress)
app.use(baseUrl +"/admin", colaboradoras)
app.use(baseUrl +"/",  introduction)
app.use(baseUrl +'/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));





module.exports = app;



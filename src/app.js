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
const appVersion = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())
app.use(cors())

database.connect();

app.use("/cantinho", host)
app.use("/localizacao", adress)
app.use("/admin", colaboradoras)
app.use("/doc", documentation)
app.use("/",  introduction)


appVersion.use("/v1", app);


module.exports = appVersion;



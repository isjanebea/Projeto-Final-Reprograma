const express =  require('express')
const cors = require('cors')
// const database = require('./data/database')

/** ROTAS */
// const host = require('./routes/host')
// const adress = require('./routes/adress')
// const colaboradoras = require('./routes/colaboradoras')
// const documentation = require('./routes/doc')

const app = express();


app.use(express.json())
app.use(cors())

// database.connect();

// app.use("/cantinho", host)
// app.use("/localizacao", adress)
// app.use("/admin", colaboradoras)
// app.use("/doc", documentation)

app.get("/", (req, res) => res.status(200).json({ message : "funcionando"}))
module.exports = app;



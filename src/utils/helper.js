module.exports = { 
    error(error) {
         res.status(500).json({ message : "Todo mundo erra, dessa vez fomos nós, sorry"})
    }
}
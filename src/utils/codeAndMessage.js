const filterResponse = (response) => {
    if (response.n == 0) {
        return [400, { mensagem: "Não conseguimos localizar o filme." }]
    }
    else if (response.nModified == 0) {
        return [304, { mensagem: "Nenhum dado foi alterado!" }]
    }
    else if (!response || response.deletedCount == 0) {
        return [400, { mensagem: "Não conseguimos localizar o filme." }]
    }

    else {
        return [200, response]
    }
}


module.exports = { filterResponse }
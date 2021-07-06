module.exports = {
    error: { message: "Todo mundo erra, dessa vez fomos nós, sorry" },
    code() {
        const random = () => parseInt(Math.random() * 10);
        return Array.from({ length: 5 }).map(numRandom => random()).join("");
    }
}
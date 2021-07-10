module.exports = {
    code() {
        const random = () => parseInt(Math.random() * 10);
        return Array.from({ length: 5 }).map(() => random()).join("");
    }
}
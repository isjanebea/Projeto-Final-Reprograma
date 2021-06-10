const app = require('./src/app');

const PORT = process.env.PORT || 3030

app.listen(PORT, () => console.log(`Running is PORT ${ process.env.NODE_ENV=='production' ? '' : PORT}`))



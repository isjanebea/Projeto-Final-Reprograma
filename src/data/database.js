const mongoose = require('mongoose');
/* DOTENV */  require('dotenv').config();


const connect = async () => {
    try {
        await mongoose.connect(
            process.env.DATABASE_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            }
        )
        console.warn('database connected!')
    } catch (error) {
        console.error(error.message)
    }
}


module.exports = { connect }
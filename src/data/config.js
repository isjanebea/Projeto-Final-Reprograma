const mongoose = require('mongoose');
/* DOTENV */  require('dotenv').config();


const connect = async () => {
    try {
        await mongoose.connect(
            process.env.DATABASE_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            }
        )
        console.log('database connected!')
    } catch (error) {
        console.error(error)
    }
}


module.exports = { connect }
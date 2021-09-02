const mongoose = require('mongoose')

const url = 'mongodb+srv://Ethernight:M4yD3vilCry@fortest.2kicj.mongodb.net/CRUD?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error to connect database.'))
db.once('open', function callback(){
    console.log("Connected to database.")
})

module.exports = db;
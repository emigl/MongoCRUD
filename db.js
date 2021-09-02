const mongoose = require('mongoose')
// YOU NEED TO PUT YOUR USER AND YOUR PASS IN THE PARAMS "user" AND "pass"
const url = 'mongodb+srv://user:pass@fortest.2kicj.mongodb.net/CRUD?retryWrites=true&w=majority'

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
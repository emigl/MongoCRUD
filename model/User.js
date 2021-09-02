const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    user: String,
    pass: String,
    country: String,
    age: Number
}, {versionKey:false})

module.exports = mongoose.model('users', userSchema)
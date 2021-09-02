const express = require('express')
const app = express()

const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const users = require('./routes/users')
app.use(users)


app.listen(3000, (req, res)=>{
    console.log('Server up here: http://localhost:3000')
})

app.get('/', (req, res)=>{
    res.send('<center><h2>It works!</h2></center>')
})
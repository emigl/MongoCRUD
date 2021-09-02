const User = require('../model/User')

// find user

module.exports.showUsers = (req, res)=>{
    User.find({}, (error, users)=>{
        if(error){
            return res.status(500).json({
                message: "The process can't find the users."
            })
        }
        res.render('index', {users:users})
    })
}

module.exports.createUser = (req, res)=>{
    const user = new User({
        name: req.body.name,
        user: req.body.user,
        pass: req.body.pass,
        country: req.body.country,
        age: req.body.age
    })

    user.save((error, user)=>{
        if (error){
            return res.status(500).json({
                message: 'Error to create a new user.'
            })
        }
        res.redirect('/')
    })
}

// Edit User
module.exports.editUser = (req, res)=>{
        const id = req.body.modalId
        const name = req.body.modalName
        const user = req.body.modal_user
        const pass = req.body.modalPass
        const country = req.body.modalCountry
        const age = req.body.modal_age

        User.findByIdAndUpdate(id, {name, user, pass, country, age}, (error, user)=>{
            if (error){
                return res.status(500).json({
                    message: 'Error to create a new user.'
                })
            }
            res.redirect('/')
        })
}

// Delete User

module.exports.deleteUser = (req, res)=>{
    const id = req.params.id

    User.findByIdAndDelete(id, (error, user)=>{
        if (error){
            return res.status(500).json({
                message: 'Error to create a new user.'
            })
        }
        res.redirect('/')
    })
}








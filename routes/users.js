const express = require('express')
const router = express.Router()


const userController = require('../controllers/userController')

// Show users (GET)
router.get('/', userController.showUsers)

// Create new user (POST)
router.post('/new', userController.createUser)

// Edit user (POST)
router.post('/edit', userController.editUser)


// Delete User (GET)
router.get('/delete/:id', userController.deleteUser)
module.exports = router

const express = require('express')
const UserController = require('../controllers/userController')

const router = express.Router()

router.post('/user/register', UserController.saveUser)
router.get('/user', UserController.findAllUsers)
router.get('/user/:id', UserController.findUserById)
module.exports = router
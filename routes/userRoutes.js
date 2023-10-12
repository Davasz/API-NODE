const express = require('express')
const UserController = require('../controllers/userController')

const router = express.Router()

router.post('/user/register', UserController.saveUser)
router.get('/user', UserController.findAllUsers)
router.get('/user/:id', UserController.findUserById)
router.delete('/user/delete/:id', UserController.deleteUserById)
router.put('/user/update', UserController.updateUser)

module.exports = router
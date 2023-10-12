const UserDao = require('../DAO/UserDao');
const User = require('../model/User')

const userDao = new UserDao();


exports.saveUser = async (req, res) => {
    try {
        const { name, tel_number, password, confirmPassword } = req.body;
        const newUser = new User(null, name, tel_number, password);

        const savedUser = await userDao.save(newUser);

        res.status(201).json(savedUser);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor' })
    }
}

exports.findAllUsers =  async (req, res) => {
    try {
        const usersQuery = await userDao.findAll()

        res.status(200).json(usersQuery)
    } catch (error) {
        res.status(500).json({error: 'Erro interno do servidor'})
    }
}

exports.findUserById = async (req, res) => {
    try {
        const {id} = req.params
    
        const userQuery = await userDao.findById(id)

        res.status(200).json(userQuery)
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' })
    }
}

exports.deleteUserById = async (req, res) => {
    try {
        const {id} = req.params

        const userDeleted = await userDao.delete(id)
        console.log(userDeleted)
        res.send(userDeleted)
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updateUser = await userDao.update(req.body)
        res.send(updateUser)
    } catch (error) {
       console.log(error)
    }
}
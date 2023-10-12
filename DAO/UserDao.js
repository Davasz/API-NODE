const db = require('../util/dbConnection');
const User = require('../model/User');
const bcrypt = require('bcryptjs')

class UserDao {
    findAll() {
        return new Promise((resolve, reject) => {

            db.query(
                'SELECT name, tel_number FROM users',
                (err, resul) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(resul)
                    }
                }
            )
        })
    }

    findById(id) {
        return new Promise((resolve, reject) => {

            db.query(
                'SELECT name, tel_number FROM users WHERE id = ?', [id],
                (err, resul) => {
                    if (err) {
                        reject(err)
                    } else if(resul.length == 0) {
                        resolve({
                            mensage: 'Usuário não encontrado!'
                        })
                    } else {
                        resolve(resul)
                    }
                }
            )
        })
    }

    save(user) {
        return new Promise(async (resolve, reject) => {
            const { id, name, tel_number, password, confirmPassword } = user
            const hashedPassword = await bcrypt.hash(password, 8)

            db.query(
                'INSERT INTO users SET ?', { name: name, tel_number: tel_number, password: hashedPassword },
                (err, resul) => {
                    if (err) {
                        reject(err)
                    } else {
                        const insertedIdUser = resul.insertId
                        const savedUser = new User(insertedIdUser, name, tel_number, null, null)

                        resolve(savedUser)
                    }
                }
            )
        })
    }

    update(user) {
        return new Promise(async (resolve, reject) => {
            const { id, name, tel_number, password } = user
            db.query(
                'SELECT * FROM users WHERE id = ?', [id],
                (err, resul) => {
                    if (err) {
                        reject(err)
                    } else if (resul.length === 0) {
                        resolve({
                            mensage: 'Usuário nao encontrado'
                        })
                    } else {
                        db.query('UPDATE users SET name = ?, tel_number = ?, password = ? WHERE id = ?',
                            [name, tel_number, password, id],
                            (err, resul) => {
                                if (err) {
                                    reject(err)
                                } else {
                                    resolve(resul)
                                }
                            })
                    }
                })
        })
    }

    delete(id) {
        return new Promise(async (resolve, reject) => {

            db.query(
                'DELETE FROM users WHERE id = ?', [id],
                (err, resul) => {
                    if (err) {
                        reject(err)
                    } else if (resul.affectedRows == 0) {
                        resolve({
                            mensage: 'Usuário nao encontrado'
                        })
                    } else {
                        resolve(resul)
                    }
                })
        })
    }

}

module.exports = UserDao;
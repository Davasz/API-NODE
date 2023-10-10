//crio a conexão e exporto
const dotenv = require('dotenv')
const mysql = require('mysql')

dotenv.config({path: './util/.env'})

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE 
})

module.exports = db
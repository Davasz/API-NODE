const express = require('express')
const db = require('./util/dbConnection')

const app = express()

db.connect((err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('mysql conectado com sucesso!')
    }
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', require('./routes/userRoutes'))


const port = process.env.PORT
app.listen(port, () => console.log('server is running on port ' + port))
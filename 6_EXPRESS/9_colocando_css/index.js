const express = require('express')
const app = express()
const port = 4003 //variável de ambiente

const path = require("path")

const usersRoutes = require('./users') // como o arquivo dentro da pasta users é chamado index.js o node já entende que é esse arquivo que eu quero chamar

// ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// arquivos estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`server is running in port ${port}`)
})

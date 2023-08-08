const express = require('express')
const app = express
const routes = express.Router()

const path = require('path')
const basePath = path.join(__dirname,'../templates') 

routes.get('/', (req, res) => {
    res.sendFile(`${basePath}/usuario.html`)
})
routes.get('/add', (req, res) => {
    res.sendFile(`${basePath}/cadastro.html`)
})
routes.post('/save', (req, res) => {
    console.log(req.body)

    res.sendFile(`${basePath}/cadastro.html`)
})


module.exports= routes
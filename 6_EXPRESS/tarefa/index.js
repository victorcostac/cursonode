const express = require('express')
const app = express()

const path = require('path')
const port = 5000

const userRoutes = require('./user')

app.use(
    express.urlencoded({
        extended:true
    }),
)

app.use(express.json())

// arquivos estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname,'./templates')

app.use('/user', userRoutes)

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})


app.listen(port,() => {console.log(`Server is running in port ${port} `)})
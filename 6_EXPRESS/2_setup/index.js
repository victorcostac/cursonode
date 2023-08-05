const express = require('express')
const app = express()
const port = 4003 //variável de ambiente

app.get('/', (req, res) => {
    res.send('<h1>olá mundo</h1> <p>ola ola</p>')
})

app.listen(port, () =>{
    console.log(`server is running in port ${port}` )
})
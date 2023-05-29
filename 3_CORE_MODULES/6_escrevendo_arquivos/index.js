const http = require("http");
const fs = require('fs')
const port = 3000;

const server = http.createServer((req, res) =>{

    const name = require('url').parse(req.url, true).query.name
    // const urlInfo = require('url').parse(req.url, true)   LINHA 7 = JUNÇÃO DA LINHA 8 E 9!!!
    // const name = urlInfo.query.name

    if(!name){
    fs.readFile('index.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    return res.end()
    })}else{
        fs.writeFile('arquivo.txt', name, function (err, data) {
            res.writeHead(302, {
                location: '/',
            })
            return res.end()
        })
        
    }
   })
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})

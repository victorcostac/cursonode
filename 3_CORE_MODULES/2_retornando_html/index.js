const http = require("http");

const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')
    res.end('<h1>Olá, esté é meu server com HTML!</h1><p>testantando atualização</p>')
})
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})

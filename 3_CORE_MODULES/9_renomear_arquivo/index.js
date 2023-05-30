const fs = require('fs')

arqAntigo = 'arquivo.txt'
arqNovo= 'novo.txt'

fs.rename(arqAntigo, arqNovo, function(err){
    if(err){
        console.log(err)
    }
    
    console.log(`o arquivo ${arqAntigo} foi nomeado para ${arqNovo}`)

})
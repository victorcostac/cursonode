const path = require('path')

//path absoluto
console.log(path.resolve('teste.txt'))
//forma path
const midFolder  = 'relatórios'
const fileName = 'victor.txt'

const filePath = path.join('/', 'arquivos', midFolder, fileName)
console.log(filePath)
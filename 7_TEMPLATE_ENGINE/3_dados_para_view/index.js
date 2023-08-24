const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const user = {
        name: 'Victor',
        surname:'Costa',
        age: 21,
    }
    const palavra = 'teste' //diferente do exemplo acima, o elemento 'palavra é uma variável e não um objeto'
    res.render('home', { user: user, palavra: palavra })
})

app.listen(3000, () => {
    console.log('app funcionando na porta 3000')
})
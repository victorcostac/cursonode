const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) =>{
    res.render('dashboard')
})

app.get('/', (req, res) => {
    const user = {
        name: 'Victor',
        surname:'Costa',
        age: 21,
    }
    const palavra = 'teste' //diferente do exemplo acima, o elemento 'palavra é uma variável e não um objeto'+

    const auth = false
    const approved = false

    res.render('home', { user: user, palavra: palavra, auth, approved })
})

app.listen(3000, () => {
    console.log('app funcionando na porta 3000')
})
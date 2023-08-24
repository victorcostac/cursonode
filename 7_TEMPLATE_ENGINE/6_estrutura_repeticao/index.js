const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) =>{
    const items = ['Item a', 'Item b', 'Item c']

    res.render('dashboard', {items})
})

app.get('/', (req, res) => {
    const user = {
        name: 'Victor',
        surname:'Costa',
        age: 21,
    }
    const palavra = 'teste' //diferente do exemplo acima, o elemento 'palavra é uma variável e não um objeto'+

    const auth = true
    const approved = false

    res.render('home', { user: user, palavra: palavra, auth, approved })
})

app.listen(3000, () => {
    console.log('app funcionando na porta 3000')
})
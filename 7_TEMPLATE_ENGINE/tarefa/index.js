const express = require('express')
const exphbs = require('express-handlebars')

const app = express()


const hbs = exphbs.create({
    partialsDir: ['views/partials'],
}
)

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {

    const items = [
        {
            nome:' monitor',
            exp: '75Hz',
            preco: 'R$ 900,00'
        },
        {
            nome: 'Mouse',
            exp: '4000 dpi',
            preco: 'R$ 150,00'
        },
        {
            nome: 'teclado',
            exp: 'mecânico',
            preco: 'R$ 250,00'
        }
    ]
    res.render('home', { items })
})

app.listen(3000, () => {
    console.log("Server is running in port 3000.")
})
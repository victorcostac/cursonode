
const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name: 'nome',
    message: 'qual o seu nome: '
},{
    name: 'idade',
    message: 'qual sua idade: '
}
])
.then((answers) => {
    console.log(answers)
    // const nome = (String(answers.nome));
    // const idade = (String(answers.idade))
    // console.log(chalk.bgYellow.black(`seu nome é: $(nome)`),  chalk.bgYellow(nome) )
    console.log(chalk.bgYellow.black(`Seu nome é ${answers.nome} e tem ${answers.idade} anos`))
})
.catch((err) => console.log(err))
// %d  
// console.log(chalk.bgYellow.black(`Seu nome é ${answer.nome} e tem ${answer.idade} anos.`))

const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name: 'nome',
    message: 'qual o seu nome: '
},{
    name: 'idade',
    message: 'qual sua idade: '
}])
.then((answers) => {
    console.log(answers)
    const nome = (String(answers.nome));
    const idade = (String(answers.idade))
    console.log(chalk.bgBlackBright(`seu nome é:`),  chalk.bgYellow(nome) )
    console.log(chalk.bgBlackBright(`sua idade é:`), chalk.bgYellow(idade) )
})
.catch((err) => console.log(err))
// %d  
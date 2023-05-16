// nome

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split("=")[1]

const id = args[1].split("=")[1]

console.log(nome, id)

console.log('o nome dele é', nome, 'e ele tem ', id, 'anos!' )


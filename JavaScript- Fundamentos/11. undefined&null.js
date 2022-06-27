let valor //não inicializada
console.log(valor)

valor = null //ausênsia de valor
console.log(valor)

const produto = {}
console.log(produto.nome)

produto.nome = 'Mesa'

console.log(produto)
produto.nome = undefined //Evitar atribuir undefined

console.log(produto)

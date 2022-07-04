let produto1 = new Object
produto1.nome = 'Celular Apple Iphone 12'
produto1.preco = 8500.67
produto1['Desconto Cliente Padrão'] = 0.40

console.log(produto1)


let produto2 = {
    nome: 'Camisa Polo',
    preco: 150.50,
    desconto: {
        primeiraCompra: 0.40,
        quintaCompra: 0.80
    }
}

console.log(produto2)

produto2.nome = 'Polo'

console.log(produto2)
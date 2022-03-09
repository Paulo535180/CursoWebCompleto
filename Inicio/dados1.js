var nomeProduto = "Caneta"
var quantidade = 10
var preco = 6.4
var iof = 1.5
var precoPorUnidade = preco + iof
var precoTotal = (preco + iof)*quantidade

console.log("Nome do Produto: "+nomeProduto);
console.log("Quantidade: "+quantidade);
console.log("Preço por Unidade: "+preco);
console.log("Imposto por Unidade: "+iof);
console.log("Valor com imposto: "+precoPorUnidade);
console.log("Valor Total da compra: "+precoTotal);

// Armazendando uma função em uma variavel

const imprimirSoma = function(a,b){
    console.log(a + b)
}
imprimirSoma(1,3)

// Armazendando uma função arrow em uma variavel

const soma = (a,b) =>{
    return a + b
}
console.log(soma(7,3))

// Retorno implícito
const subtracao = (a,b) => a - b
console.log(subtracao(7,1))
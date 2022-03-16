// Função sem retorno
function imprimirSoma(valor1, valor2){
    console.log(valor1+valor2)
}

imprimirSoma(1,3)
imprimirSoma(3)
imprimirSoma(1,6,10,12,8,6)

//Função com retorno
function soma (valor1, valor2 = 60 ){
    return valor1 + valor2
}

console.log(soma(2,3))
console.log(soma(2))
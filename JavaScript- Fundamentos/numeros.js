const peso1 = 1.0
const peso2 = Number(2.0)
console.log("Peso 1 =",peso1.toFixed(1))
console.log("Peso 2 =",peso2)


// console.log(Number.isInteger(peso1))
// console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

console.log("Avaliação 1 = " +avaliacao1+ " / " + "Avaliação 2 = " +avaliacao2)

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2);
const media = total / (peso1 + peso2)

console.log("Média valor original: "+media)
console.log("Média com quatro casa decimais: "+media.toFixed(4))
console.log("Média em string: "+media.toString())
console.log("Transformando média em Binário: "+media.toString(2))


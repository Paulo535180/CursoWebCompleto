const carros = new Array('Ford Ka', 'C3', 'Onix', 'Celta' )
console.log(carros)

const frutas = ['Uva', 'Maça', 'Pera', 'Laranja' ]
console.log(frutas)

const valores = [1.1,2.2,3.3,4.4]
console.log(valores)
valores[4] = 5.5
console.log(valores)


console.log(valores.length)
valores.push({id:1, nome: 'Paulo'}, false, null, 'Teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]

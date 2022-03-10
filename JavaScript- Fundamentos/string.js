const escola = "Cod3r"

console.log(escola.charAt(4)) //Pega um determinado caracter de acordo com seu Index.
console.log(escola.charCodeAt(3)) //Pega o código daquela string na baseado na table unicode.
console.log(escola.indexOf('r')) //Pega a partir de um caracter o Índice dele dentro da string


console.log(escola.substring(1)) //Exibi a string a partir do Índice passado no parâmetro
console.log(escola.substring(0,3)) //Exibi a string a partir do Índice inicial e final passado no parâmetro


console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(escola,'Cod3r Instituto de Educação Tecnológica'))
console.log('Ana,Maria,Pedro,Gustavo'.split(','))
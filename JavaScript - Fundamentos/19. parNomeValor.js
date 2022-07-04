const saudacao = 'Olá, Bem-vindo!' //Contexto Léxico 1

function exec (){
    const saudacao = 'Mudando a saudação' //Contexto Léxico 2
    return saudacao
}

//Objetos são grupos aninhados de chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço:{
        logradouro: 'Rua um do lado da dois',
        numero: 531
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
//Novo Recurso do ES2015

const pessoa = {
    nome: 'Paulo Ricardo Lima Aguiar',
    nomeMae: 'Rita de cassia',
    idade: 23,
    endereco: {
        logradouro: 'Rua General Lauro Cavalcanti de Farias',
        numero: '531',
        complemento: '',
    }
}

const {nome, idade} = pessoa
console.log(nome+',', idade+ ' anos')

const {nome: n, idade: i} = pessoa
console.log(n+',',i+' anos')

const {nomeMae, bemHumorada = true} = pessoa
console.log(nomeMae, bemHumorada)
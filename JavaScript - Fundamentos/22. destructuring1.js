//Novo Recurso do ES2015

const pessoa = {
    nome: 'Paulo Ricardo Lima Aguiar',
    nomeMae: 'Rita de cassia',
    idade: 23,
    endereco: {
        logradouro: 'Rua General Lauro Cavalcanti de Farias',
        numero: '531',
        //PARA DESESTRUTURAR UMA PROPRIEDADE STRING E EXIBIR UM VALOR PADRAO, DEVE SE FAZER UMA VALIDACAO SE O CAMPO EXISTE OU NÃO?
        complemento : ''

    }
}


const pessoaCopia = JSON.parse(JSON.stringify(pessoa))
console.log(pessoaCopia)

pessoaCopia.endereco.complemento = pessoa.endereco.complemento ?  pessoa.endereco.complemento : 'Sem complemento...';
console.log(pessoa)
console.log(pessoaCopia)

// const {nome, idade} = pessoa
// console.log(nome+',', idade+ ' anos')

// const {nome: n, idade: i} = pessoa
// console.log(n+',',i+' anos')

// const {nomeMae, bemHumorada = true} = pessoa
// console.log(nomeMae, bemHumorada)

// const {logradouro, numero, complemento = complemento ? 'Sem complemento...' : 'b' } = pessoa.endereco
// console.log(logradouro, numero, complemento)

//
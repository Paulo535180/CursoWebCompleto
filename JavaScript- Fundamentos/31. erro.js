function erro(erro) {
    throw new Error('...')
}

function imprimirNomeGritado([nome, sexo]) {
    try {
        console.log(nome.toUpperCase() + '!!!')
        console.log(sexo.toUpperCase() + '!!!')
    } catch (e) {
        erro(e)
    }finally{
        console.log('Fim da execução...')
    }

}

const obj = {
    nome: 'Paulo Ricardo Lima Aguiar',
    idade: 23,
    sexo: 'Masculino'
}

imprimirNomeGritado([obj.nome, obj.sexo])
// console.log(imprimirNomeGritado())
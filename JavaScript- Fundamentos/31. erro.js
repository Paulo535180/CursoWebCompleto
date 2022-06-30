function erro(erro) {
    throw new Error('...')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!')
        console.log(obj.sexo.toUpperCase() + '!!!')
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

imprimirNomeGritado(obj)
// console.log(imprimirNomeGritado())
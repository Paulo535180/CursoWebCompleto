console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1)

function obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Executando...')
    }
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')
obj2.exec()
console.log(obj1.nome)
console.log(obj2.nome)
console.log(obj3.nome)
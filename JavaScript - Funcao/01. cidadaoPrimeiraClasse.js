//Função em JS é Firts-Class Object (Citizens)
//Higher-order function

//Criar de forma literal
function func1(){return 'Função 1'}

//Armazendar em uma variavel
const func2 = function(){return 'Função 2'}

//Armazenar dentro de um array
const array = [function (a,b) {return a + b}, func1, func2]
console.log(array[0](2,3), array[1](),array[2]())


//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function (){return 'Opa!'}
console.log(obj.falar())

//Passar função como parametro
function run (fun){
    fun();
}
run(function(){
    console.log('Executando...')
})

//Uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(5,5)(1)
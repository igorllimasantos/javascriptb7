
/*
tipos de variaveis:
let idade = 90  tipo number
let nome = "Igor" tipo string
let legado = false tipo boolean

 array 
let ingredientes = ["farinha","agua" ,"corante","sal"]

console.log(ingredientes[9])
objetos
let personagem = {
    nome: "Igor Lima",
    nivel : 10,
    forca: 800,
    magia : 200,
    vida : 2000,
    mana : 200


console.log(personagem.magia)

funçoes 
function somar( a, b ){
    let resultado = a + b 
    return resultado
}

let x1 = somar( 15 , 5 ) 15 é A e 5 é B RESULTADO DESSA FUNÇÃO VAI SER 20 SE FOR SOMAR
let y2 = somar(2,8)
console.log(x1)
console.log(y2)


 Arronw Fuctions
let somar2 = (a,b) => {
    let resultado = a + b 
    return resultado
}

let x = somar(15,5)
let y = somar2(2,8)
console.log(x)
console.log(y)

 Condicionais de Execução

if (idade == 18){
    console.log("Parabens agora você pode ser Preso")

}
simbolos de comparação
 == 
 !=
> 
<=
>= maior ou igual
if (nome == "Igor"){
console.log("mensagem especial")
} else {
    console.log("Mensagem Normal")
}

lista = ["massa", "farinha","massa"]

for(let item of lista){
    console.log("-  ingredientes " + item)
}
*/

//DOM
//alert("opa aquii está um aviso")

//erenciar Eventos 
//Evento de click é quando vai acontecer
function avisar() {
    alert("Opa, Disparei")
}

////cONTINUAR EM 1 :15 ,56 ESTAVA EXPLICANDO SOBRE ONCLICKS 
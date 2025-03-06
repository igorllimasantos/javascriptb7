//tipos de variaveis:
let idade = 90 // tipo number
let nome = 'Igor Lima' //tipo string
let legado = false //tipo boolean

/// array 
let ingredientes = ["farinha","agua" ,"corante","sal"]

console.log(ingredientes[9])
//objetos
let personagem = {
    nome: "Igor Lima",
    nivel : 10,
    forca: 800,
    magia : 200,
    vida : 2000,
    mana : 200
}

console.log(personagem.magia)

//funçoes 
function somar( a, b ){
    let resultado = a + b 
    return resultado
}
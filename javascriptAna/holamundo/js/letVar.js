'use strict'

//pruebas con var
var numero = 40
console.log(numero) //valor 40

if(true){
var numero = 50
console.log(numero) //valor 50
numero = 100
}

console.log(numero) // valor 100

// pruebas con let. el let solo aparece dentro de su bloque, no a nivel global que es lo que hacen las variables con var. 
// let tiene un alcance limitado.
var texto = "ana navarro"
console.log(texto) //valor ana navarro

if(true){
let texto = "pepito grillo"
console.log(texto) //valor pepito grillo

}

console.log(texto) // valor ana navarro
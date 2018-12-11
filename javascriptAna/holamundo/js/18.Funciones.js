'use strict'

//FUNCIONES
//uNA FUNCION ES UNA AGRUPACION REUTILIZABLE DE UN CONJUNTO DE INSTRUCCIONES QUE PODEMOS UTILIZARLA SIEMPRE QUE QUERAMOS.
/*
ESTRUCTURA
function name(params) {
    
}
*/

function presentacion(){
    return "Hola soy Ana y me gusta comer!!"
}
console.log(presentacion(), presentacion(), presentacion())

//O

function Ana(){
    console.log("Hola soy Ana Navarro!!")
}
//Invocar o llamar a la funcion
Ana();

//PARAMETROS. variables que van a alterar la lógica o el resultado que nos va a devolver la función.
function calculadora(numero1, numero2){
    console.log("Suma: " + (numero1 + numero2))
    console.log("Resta: " + (numero1 - numero2))
    console.log("Multiplicación: " + (numero1 * numero2))
    console.log("División: " + (numero1 / numero2))
    console.log("*************************************")

}
/*
for(var i = 1; i <= 10; i++){
    calculadora(i, 6)
}
*/

//PARAMETROS OPCIONALES

'use strict'

//EJERCICIO5.
//HACER UN PROGRAMA QUE MUESTRE TODOS LOS NÚMEROS DIVISORES DE UN NUMERO INTRODUCIDO EN UN PROPMT

var numero = Number(prompt("Introduce un número: "))

for(var i = 1; i <= numero; i++){
    if(numero%i == 0){
        console.log("Divisores: " + i)
    }
}
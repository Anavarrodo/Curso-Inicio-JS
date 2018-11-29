'use strict'

/*
Vamos a hacer un programa que muestre todos los numeros divisores de un numero introducido en un propmt
*/

var numero = parseInt(prompt("Introduce un numero", 1))

for(var i = 1; i <= numero; i++ ){
    if(numero%i == 0){
        console.log("Divisor es " + i);
    }
}
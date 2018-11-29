'use strict'
/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("INTRODUCE UN PRIMER NUMERO"))
var numero2 = parseInt(prompt("INTRODUCE UN SEGUNDO NUMERO"))

while(numero1 < numero2){
    numero1++;

    if(numero1%2 != 0){
        console.log("el" + numero1 + "es impar")
    }
}
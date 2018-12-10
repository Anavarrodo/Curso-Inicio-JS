'use strict'

//EJERCICIO3.
//HACER UN PROGRAMA QUE MUESTRE TODOS LOS NÚMEROS ENTRE DOS NÚMEROS INTRODUCIDOS POR EL USUARIO

var numero1 = Number(prompt("Introduce el primer número: "))
var numero2 = Number(prompt("Introduce el segundo número: "))

for(var i = numero1; i <= numero2; i++){
    console.log(i)
}
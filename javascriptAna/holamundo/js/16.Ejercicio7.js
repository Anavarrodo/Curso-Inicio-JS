'use strict'

//EJERCICIO 7
//TABLA DE MULTIPLICAR DE UN NUMERO INTRODUCIDO POR PANTALLA

var numero = Number(prompt("Que tabla de multiplicar quieres??"))

for(var i = 1; i <= 10; i++){
    var resultado = numero * i
    console.log(numero + " x " + i + " = " + resultado)
}

//Mostrar todas las tablas de multiplicar
for(var i = 1; i <= 10; i++){
   for(var c = 1; c <= 10; c++){
       var resultado = c*i
    console.log(i + " x " + c + " = " + resultado)
   }
}

'use strict'


//Ejercicio1:
//Hacer un programa que nos pida dos número y decir cuál es mayor, menor o iguales.
//PLUS: si lo introducido no es un número o es igual o menor que 0, que nos vuelva a pedir los datos
var numero1 = Number(prompt("Introduce el primer número"))
var numero2 = Number(prompt("Introduce el segundo número"))


while(isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0){
    numero1 = Number(prompt("Introduce el primer número"))
    numero2 = Number(prompt("Introduce el segundo número"))
}

if(numero1 > numero2){
    console.log("El número " + numero1 + " es mayor que el número " + numero2)
}else if(numero1 < numero2){
    console.log("El número " + numero1 + " es menor que el número " + numero2)
}else if(numero1 == numero2){
    console.log("El número " + numero1 + " es igual que el número " + numero2)
}else{
    console.log("Los números " + numero1 + " y " + numero2 + " no son válidos")
}
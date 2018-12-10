'use strict'

//EJERCICIO6.
//HACER UN PROGRAMA QUE NOS DIGA SI UN NUMERO ES PAR O IMPAR
//VENTANA PROPMT
//CUANDO EL NUMERO NO SEA VALIDO, QUE NOS VUELVA A PEDIR EL NUMERO
//QUE LO MUESTRE POR CONSOLA

var numero = Number(prompt("Introduce un número"))

function esPar(numero){
if(numero%2 == 0){
    console.log("El " + numero + " es par")
}else{
    console.log("El " + numero + " es impar")
}
}

function esValido(numero){
while(isNaN(numero)){
    numero = Number(prompt("Introduce un número"))
}
}

esPar(numero);
esValido(numero);
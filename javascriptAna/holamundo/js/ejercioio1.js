'use strict'

/* 
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y cual es igual
ponemos parseInt delante de propmt porque por defecto te devuelve un string y en este caso queremos enteros
Para que nos pueda volver a pedir los datos.
isNaN significa no dato numerico
*/

var numero1 = parseInt(prompt("Introduce un número"))
var numero2 = parseInt(prompt("Introduce un segundo número"))

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce un número"))
    numero2 = parseInt(prompt("Introduce un segundo número"))
    alert("INTRODUCE LOS NUMEROS CORRECTAMENTE")
}
if(numero1 == numero2){
    alert("LOS DOS NUMERO SON IGUALES")
}else if(numero1 > numero2){
    alert("EL NUMERO " + numero1 + " ES MAYOR QUE EL " + numero2)
}else if(numero1 < numero2){
    alert("EL NUMERO " + numero1 + " ES MENOR QUE EL " + numero2)
}else{
    alert("INTRODUCE LOS NUMEROS CORRECTAMENTE")
}
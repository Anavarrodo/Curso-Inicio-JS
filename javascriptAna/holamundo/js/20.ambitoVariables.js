'use strict'


//AMBITO DE LA FUNCION.
//PODEMOS CREAR UNA VARIABLE FUERA DE LA FUNCION Y LLAMARLA EN NUESTRA FUNCION EJ. VAR NUMERO
//NO PODEMOS CREAR NA VARIABLE DENTRO DE LA FUNCION Y UTILIZARLA FUERA. EJ. VAR AÑO
var texto = "Hola que tal? Están bien? Me oyen?"
var numero = 8
function holaQueTal(texto){
    var año = 2018
    console.log(texto)
    console.log(numero)
    console.log(año.toString()) // convierto un entero en un string
   
}
holaQueTal(texto)
//console.log(año)



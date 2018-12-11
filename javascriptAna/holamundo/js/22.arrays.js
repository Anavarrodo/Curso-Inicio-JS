'use strict'

//ARRAYS
//ES UNA COLECCION DE TIPOS DE DATOS(VALORES) QUE PUEDE TENER UNA VARIABLE. PODEMOS TENER MUCHOS VALORES DENTRO DE UNA VARIABLE
//le puedo meter el tipo de datos que quiera
var animales = ["perro", "gato", "loro", "camello", "caballo", "gorrión", "peces", 52, true, false]

//DECLARACION
var animales = ["perro", "gato", "loro", "camello", "caballo", "gorrión", "peces", 52, true, false]
//var animales2 = new Array ("perro", "gato", "loro", "camello", "caballo", "gorrión", "peces", 52, true, false)
console.log(animales)
//console.log(animales2)

//COMO ACCEDER
console.log(animales[1]) //gato
//console.log(animales2[2]) //loro

//CUANTOS ELEMENTOS TIENE MI ARRAY
console.log(animales.length)

//EJERCICIO:
//PONIENDO EL INDICE DE MI ARRAY SACAR SU VALOR
/*
var indice = Number(prompt("Introduce el indice"))
if(indice > animales.length){
    alert("No tenemos ningún valor para ese índice")
}else{
    console.log(animales[indice])
}
*/
//RECORRER UN ARRAY COMPLETO Y SACAR SU VALOR POR PANTALLA.
document.write("<h1>ANIMALES</h1>")
for(var i = 0; i <= animales.length; i++){
    document.write("<li>" + animales[i] + "</li>")
}

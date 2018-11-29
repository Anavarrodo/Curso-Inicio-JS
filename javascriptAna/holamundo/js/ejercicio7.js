'use strict'
/*
tabla de multiplicar por un numero introducido por pantalla
*/

var numero = parseInt(prompt("DE QUE NUMERO QUIERES LA TABLA DE MULTIPLICAR??", 1))

document.write("<h1>TABLA DE MULTIPLICAR DEL " + numero + "</h1>")

for(var i = 1; i <= 10; i++){
    document.write(i + " x " + numero + " es = a " + (i*numero) + "<br/>")
    
}

    //SI QUIERO QUE ME APAREZCAN TODAS LAS TABLAS
for(var c = 1; c <= 10; c++){
    document.write("<h1>TABLA DE MULTIPLICAR DEL " + c + "</h1>")
    for(var i = 1; i <= 10; i++){
        document.write(i + " x " + numero + " es = a " + (i*c) + "<br/>")
        }
}
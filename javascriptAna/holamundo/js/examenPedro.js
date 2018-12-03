'use strict'

//EJERCICIO 1. NOTA 1
//Crea una funcion con un parametro de entrada de tipo numerico, y que pinte por consola el factoria de dicho numero
/*
var numero = prompt("Mete un número")

if(Number(numero) == numero){
    numero = Number(numero)
for(var i = numero; i >= 1; i--){   
    numero = numero * i
}
console.log("El factorial de " + i )
}
*/

function factorial(numero){
console.log("calcular el Factorial de "+numero)
var result =numero;
for(var i = 1; i<numero;i++){
result = result*i;
}
console.log("EL factorial es --> "+result)
}

//EJERCICIO 2 
//Crear un funcion con un parametro de entrada tipo string y otro de tipo char y que nos diga el numero de veces
// que se repite el caracter en ese String
//y lo saque por consola
//NOTA 1.5

function repeticion(string, char){
 var array = string.split('');
 console.log(array)
 var resultado = 0;
 array.forEach(element => {
     if(element == char){
         resultado++;
     }
 });
 console.log("La letra " + char + " aparece " + resultado )
}

//Ejercicio 3 -->Crear una funcion con un parametro de entrada tipo string , que nos diga el numero de letras que 
//tiene dicho string
//NOTA 0
/*
function frase (entrada){
var array = entrada.split('');
array.forEach(element => {
    console.log(element)
});
}
*/

function tamanioString(entrada){
    var array = entrada.split('')
   console.log("El tamaño del String es de "+ array.length+" caracteres")
}

//Ejercicio 4 -->Crear una funcion con un parametro de entrada tipo string  y que te diga el numero de vocales
//NOTA 0.5

function vocales (entrada){
var array = entrada.split('')
var resultado = 0;
array.forEach(element => {
    switch(element){
        case "a":
        resultado++;
        break;
        case "e":
        resultado++;
        break;
        case "i":
        resultado++;
        break;
        case "o":
        resultado++;
        break;
        case "u":
        resultado++;
        break;
    }
});
console.log("Mi frase tiene " + resultado + " vocales")

}

//Ejercicio 5 -->Crear una funcion con un parámetro de entrada tipo string  
//que saque por consola el mismo string dado la vuelta y  nos analice el numero de vocales.
//Nota 4.

function darVuelta(entrada){
    var array = entrada.split('')
    console.log("Esta es la frase " + array)
    console.log("este es mi array al reves" + array.reverse());
    vocales(entrada);
}
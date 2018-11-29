'use strict'

//TRANSFORMACION DE TEXTOS

var numero = 444;
var texto1 = "Bienvenido a mi casa";
var texto2 = "Hogar dulce hogar";
var nombre = "Ana María Navarro Dominguez";
var miembros = ["ana", "pedro", "gato", "lola"];
var textoTotal = texto1 + "  " + texto2;
var textoAmplio = texto1.concat( "  " + texto2);
//convertir un numero en string
console.log(numero.toString());

//convertir un texto en mayusculas
console.log(texto1.toUpperCase());

//convertir en minusculas
console.log(texto2.toLowerCase());

//calcular la longitud que tiene un texto en letras si es una frase o en elementos si en un arrays
console.log(nombre.length);
console.log(miembros.length);

//concatenar: unir textos
console.log(textoTotal);

//otra forma de concatener es utilizando el metodo concat:
console.log(textoAmplio);




'use strict'

//OPERADORES.
//Sirve para hacer operaciones con las variables.

var numero1 = 7;
var numero2 = 12;
var suma = numero1 + numero2

console.log("La suma de mis números es " + suma)

//TIPOS DE DATOS.

var numeroEntero = 44;
var cadenaTexto = "Me llamo Ana!"
var verdaderoBooleano = true;
var falsoBooleano = false;

//Number() para connvertir un número en entero o decimal(que no lo interprete como un string)
//parseInt() como el anterior pero solo para enteros.
//parseFloat() como el anterior pero con decimales.
var numeroDecimal = "40.5"
console.log(Number(numeroDecimal))

//String(). para convertir un entero en un decimal.
var convertirNumbero = 55;
console.log(String(convertirNumbero) + 10) // no me hace una operación suma, sino una concatenación

//Para conocer el tipo de dato que nos devuelve una variable, utilizamos typeof
console.log(typeof numeroEntero)
console.log(typeof cadenaTexto)
console.log(typeof verdaderoBooleano)
console.log(typeof falsoBooleano)
console.log(typeof numeroDecimal)
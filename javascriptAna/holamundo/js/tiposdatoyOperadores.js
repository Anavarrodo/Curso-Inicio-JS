
'use strict'

//operadores 
//los números enteros se ponen sin comillas

var numero1 = 7
var numero2 = 12
var operacion = numero1 + numero2

//alert ("el resultado de la suma es: " + operacion)

var numero1 = 7
var numero2 = 12
var operacion = numero1 - numero2

//alert ("el resultado de la resta es: " + operacion)

var numero1 = 7
var numero2 = 12
var operacion = numero1 * numero2

//alert ("el resultado de la multiplicacion es: " + operacion)

var numero1 = 7
var numero2 = 12
var operacion = numero1 / numero2

//alert ("el resultado de la division es: " + operacion)

//tipos de datos: enteros, string, decimal, booleano (true-false), arrays.

var numero_entero = 44
var cadenaCaracteres = "Hola que tal"
var verdadero = true
var falso = false
// Number (convierte un string en un entero) / parseInt (convierte un string en un entero)/ paseFloat (conviente tambien en decimales)
//var numero_falso = "38"
//console.log(numero_falso + 7) //pintaria 387
//console.log(Number(numero_falso)+7) //pintaria 45
//console.log(parseInt(numero_falso)+7) // pintaria 45
//console.log(parseFloat(numero_falso)+7) // pintaria 45
var numero_falso = "38.5"
//console.log(parseFloat(numero_falso)+7) // pintaria 45.5

//String (convierte un entero en una cadena de caracteres para concatenar, por ejemplo)
//console.log(numero_entero + 7) // pintaria 51, la suma de dos enteros
//console.log(String(numero_entero) + 7) // pintaria 447

//typeof sirve para decirnos cual es el tipo de dato de nuestras variables
console.log(typeof numero_entero) //number
console.log(typeof cadenaCaracteres) //String
console.log(typeof verdadero) //boolean
console.log(typeof falso) //boolean
console.log(typeof numero_falso) //String

'use strict'

console.log(Math.random()) //no muestra un numero alatorio decimal y 0 entero
console.log(Math.random()*10) //no muestra un numero alatorio decimal y 1 entero
console.log(Math.random()*100) //no muestra un numero alatorio decimal y 2 entero
console.log(Math.random()*1000) //no muestra un numero alatorio decimal y 3 entero
console.log(Math.random()*10000) //no muestra un numero alatorio decimal y 4 entero
console.log(Math.random()*100000) //no muestra un numero alatorio decimal y 5 entero

//si queremos convertir ese numero decimal en un entero
console.log(Math.ceil(Math.random()*10000))


var numeros = [1, 2, 5, 9, 6, 156, 2563]
var resultado = Math.max(...numeros)
console.log(resultado)


//Las FUNCIONES MATEMATICAS son:
/*
abs(): devuelve el valor absoluto de un número
min(): devuelve el menor de los números.
max(): devuelve el mayor de los números.
pow(): devuelve el resultado de la operación de elevar un número base elevado a un exponente pasado como parámetro.
random(): devuelve un número aleatorio entre cero y uno (con decimales).
sqrt(): devuelve la raíz cuadrada del número pasado como parámetro.

acos(): devuelve el arcocoseno de un número, en radianes.
asin(): devuelve el arcoseno, en radianes.
cos(): devuelve el coseno.
log(): devuelve logaritmo natural.
sin(): devuelve el seno.
tan(): devuelve la tangente de un ángulo.
*/

// REDONDEAR NUMEROS
/*
ceil(): usado para redondear un número hacia el siguiente número entero.
floor(): redondea un número hacia el anterior número entero.
round(): redondea un número hacia el entero más próximo: si la parte decimal es menor a '.5' se redondea hacia atrás, 
en caso contrario se hace hacia delante.
*/

//y muchos mas...


'use strict'

//EJERCICIO2.
//uTILIZANDO UN BUCLE, MOSTRAR LA SUMA Y LA MEDIA DE LOS NUMEROS INTRODUCIDOS POR EL USUARIO HASTA QUE META UN NUMERO NEGATIVO

var suma = 0;
var contador = 0;

do {
    var numero = Number(prompt("Introduce números: "))
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;
        contador++; 
    }

} while (numero >= 0);

console.log("La suma de los números introducidos es: " + suma)
console.log("La media de los números introducidos es: " + (suma/contador))
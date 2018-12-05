'use strict'
/*
//crear un array de enteros de 20 posiciones y sacar una lista de numeros primos, 
//otra de pares y otra de impares dentro del mismo bucle
//e imprimir por consola.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(numeros)

var numerosPares = [];
var numerosImpares = [];
var numerosPrimos = [];
var numerosNoPrimos = [];
var resultadoSuma = 0;
var resultadoSumaPrimo = 0;
var resultadoFinal = 0;

for(var i = 0; i < numeros.length; i++){
    if(numeros[i]%2 == 0 ){
        numerosPares.push(numeros[i]);
    }else{
        numerosImpares.push(numeros[i]);
    }
    if(esPrimo(numeros[i])){
        numerosPrimos.push(numeros[i]);
    }else{
        numerosNoPrimos.push(numeros[i]);
    }
    resultadoSuma += numeros[i];

}

numerosPrimos.forEach(element => {
   resultadoSumaPrimo+=element; 
});

resultadoFinal = resultadoSuma - resultadoSumaPrimo;

console.log("Los números pares son --> " + numerosPares);
console.log("Los números impares son --> " + numerosImpares);
console.log("Los números primos son --> " + numerosPrimos);
console.log("Los números no primos son --> " + numerosNoPrimos);
console.log("El resultado de la suma es --->" + resultadoSuma);
console.log("El resultado de la suma de numeros primos es --->" + resultadoSumaPrimo);
console.log("El resultado de la resta de numeros del array y numeros primos es --->" + resultadoFinal);

function esPrimo(numero) {

    for (var i = 2; i < numero; i++) {
  
      if (numero % i == 0) {
        return false;
      }
    }
  
    return true;
  }
*/

//1. Haz un programa que imprima los múltiplos de 3 hasta 100 con for, while y do-while.
var numeros = new Array (100);
for(var i = 1; i <= 100; i++){
    numeros[i] = i
    console.log("El valor de mi array es " + numeros[i] + " en la posicion " + i)
}
console.log("Mi array es: " + numeros)

var numerosMultiplosDe3 = []

for(var i = 1; i <= numeros.length; i++){
    if(multiplosDe3(numeros[i])){
        numerosMultiplosDe3.push(numeros[i]);
    }
}
console.log("Los múltiplos de 3 son con for : " + numerosMultiplosDe3) 

function multiplosDe3(numero){
    if(numero % 3 == 0){
        return true;
    }else{}

        return false;
}

while(multiplosDe3(numeros[i])){
    numerosMultiplosDe3.push(numeros[i]);
}
console.log("Los múltiplos de 3 son con while : " + numerosMultiplosDe3)

do[numerosMultiplosDe3.push(numeros[i])]
while(
    multiplosDe3(numeros[i])
)
console.log("Los múltiplos de 3 son con do while : " + numerosMultiplosDe3)

//2. Haz un programa que imprima los múltiplos de 5 hasta 200 con for, while y do-while.
var numeros2 = new Array (200);
for(var i = 0; i <= 200; i++){
    numeros2[i] = i
}
console.log("Mi array en el ejercicio 2 es: " + numeros2)

var numerosMultiplosde5 = []

for(var i = 0; i <= numeros2.length; i++){
    if(numeros2[i]%5==0){
        numerosMultiplosde5.push(numeros2[i]);
        console.log("Numero Introducido"+numeros2[i])
    }
}
console.log("Los múltiplos de 5 son con for : " + numerosMultiplosde5) 


function multiplosDe5(numero){
    if(numero % 5 == 0){
        return true;
    }else{
        return false;
    }
}

//3. Haz un programa que repita un número determinado de veces una frase introducida por teclado.

var palabra = prompt("Introduce una frase");
var veces = prompt("Introduce un numero para repetir la frase");
repetir(palabra, veces);
function repetir(frase, numero){
    for(var i = 0; i < numero; i++){
        console.log(frase)
    }
}

//FACTORIAL

function factorial(numero){
    var resultado = numero ;
    for(var i = 1 ; i < numero; i ++){
        console.log("El numero es " + resultado)
        resultado = resultado * i
        console.log("El numero es " + resultado)
    }
    console.log("El resultado del factorial es: " + resultado)
}


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  function cuentaAtras(){
      for(var i = 1; i <= 20;){
         
          console.log("Mi tiempo es " + i)
          i= i+3
          sleep(500);
      }
  }

  
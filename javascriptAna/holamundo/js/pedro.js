'use strict'

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

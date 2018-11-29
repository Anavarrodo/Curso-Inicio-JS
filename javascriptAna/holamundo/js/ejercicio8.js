'use strict'

/*
Calculadora:
1. pida dos numeros por pantalla
2. si metemos uno mal que nos lo vuelva a pedir
3. en el cuerpo de la pagina, en una alerta y por consola el resultado de sumar, restar, multipliciar y dividir.
*/

var numero1 = parseInt(prompt("INTRODUCE EL PRIMER NUMERO", 0))
var numero2 = parseInt(prompt("INTRODUCE EL SEGUNDO NUMERO", 0))


while(isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0){
     numero1 = parseInt(prompt("INTRODUCE EL PRIMER NUMERO", 0))
     numero2 = parseInt(prompt("INTRODUCE EL SEGUNDO NUMERO", 0))
     alert("INTRODUCE LOS NUMEROS CORRECTAMENTE")    
}

var resultado = "La suma es " + (numero1+numero2) + "<br/>" + 
                "La resta es " + (numero1-numero2) + "<br/>" +
                "La multiplicación es " + (numero1*numero2) + "<br/>" +
                "La división es " + (numero1/numero2) + "<br/>"
 var resultadoC = "La suma es " + (numero1+numero2) + "\n" + 
                "La resta es " + (numero1-numero2) + "\n" +
                "La multiplicación es " + (numero1*numero2) + "\n" +
                "La división es " + (numero1/numero2) + "\n"
document.write(resultado)
alert(resultadoC)
console.log(resultadoC)
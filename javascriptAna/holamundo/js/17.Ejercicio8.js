'use strict'

//EJERCICIO 8.
/*
CALCULADORA:
1. PIDA DOS NUMEROS POR PANTALLA
2. EN EL CUERPO DE LA PAGINA, EN ALERTA Y POR CONSOLA EL RESULTADO DE 
SUMAR, RESTAR, MULTIPLICAR Y DIVIDIR
3. SI METEMOS UNO MAL QUE NOS LO VUELVA A PEDIR
*/

var numero1 = Number(prompt("Introduce el primer número: "))
var numero2 = Number(prompt("Introduce el segundo número: "))

while(isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0){
    numero1 = Number(prompt("Introduce el primer número"))
    numero2 = Number(prompt("Introduce el segundo número"))
}

var resultado = "La suma es " + (numero1 + numero2) + "<br>" +
                "La restar es " + (numero1-numero2) + "<br>" +
                "La multiplicación es " + (numero1*numero2) + "<br>" +
                "La división es " + (numero1/numero2) + "<br>"
var resultado2 = "La suma es " + (numero1 + numero2) + " \n" +
                "La restar es " + (numero1 - numero2) + " \n" +
                "La multiplicación es " + (numero1 * numero2) + " \n" +
                "La división es " + (numero1 / numero2) + " \n"

console.log(resultado2);
alert(resultado2)
document.write(resultado)
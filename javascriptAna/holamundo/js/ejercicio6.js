'use strict'
 
/*
Hacer un programa que nos diga si un numero es par o impar.
1.ventana prompt
2. si el numero no es valido que nos pida de nuevo el numero
3. que nos muestre si el numero es par o impar
*/

var numero = parseInt(prompt("Introduce un numero en la casilla" , 0))

while(isNaN(numero)){
    numero = parseInt(prompt("Introduce un numero en la casilla" , 0))  
}
if(numero%2 == 0){
    alert("EL NUMERO " + numero + " es par" )
}else if (numero%2 != 0){
    alert("EL NUMERO " + numero + " es impar" )
}


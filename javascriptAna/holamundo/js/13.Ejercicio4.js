'use strict'

//EJERCICIO4.
//MOSTRAR TODOS LOS NÚMEROS IMPARES ENTRE DOS NÚMEROS INTRODUCIDOS POR EL USUARIO


var numero1 = Number(prompt("Introduce el primer número: "))
var numero2 = Number(prompt("Introduce el segundo número: "))
//resuelto yo:

for(var i = numero1; i <= numero2; i++){
    if(i%2 != 0){
        console.log("El número " + i + " es impar")
    }
}

//Resuleto clase
while(numero1 < numero2){
    numero1++;
    if(numero1%2 != 0){
        console.log("El número " + numero1 + " es impar")
    }
}
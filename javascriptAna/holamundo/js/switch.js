'use strict'

var edad = 18;
var imprime = " "

switch(edad){
    case 18:
    imprime = "Ya eres mayor de edad"
    break;
    case 25:
    imprime = "Ya eres un adulto"
    break;
    case 40:
    imprime = "Estas en la crisis de los 40"
    break;
    case 75:
    imprime = "Ya eres un anciano"
    break;
    default:
    imprime = "Tu edad es neutra"
    break;
}
console.log(imprime)

/*
var texto = parseInt(prompt("¿Cuanto quieres a Ana? introduce un numero del 1 al 5", 1 + "-" + 5 ));
console.log(texto);
var gradoAmor = 5;
var imprime = " ";

switch(gradoAmor){
    case 1:
    imprime = "Le quieres muy poco";
    break;
    case 2:
    imprime = "Le quieres una mijita pequeña";
    break;
    case 3:
    imprime = "Le quieres un poquito más";
    break;
    case 4:
    imprime = "Le quieres mucho";
    break;
    case 5:
    imprime = "No puedes vivir sin ella";
    break;
}
console.log(imprime);
*/

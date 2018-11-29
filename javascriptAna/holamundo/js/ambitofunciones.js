'use strict'

//AMBITO DE FUNCIONES. si creas una variable dentro de una funcion, solo podrás acceder a ella dentro de dicha funcion (dentro de su ambito como funcion).
//en cambio, si creo una variable fuera de la función, si podré tener acceso a ella dentro de la función.
//para convertir un numero en un string, podemos utilizar el método(que es una funcion para un objeto) .toString() detras del nombre

function holaMundo (texto){
var pelicula = "Moulin Rouge";
    console.log(texto);
    console.log(edad.toString());
    console.log(pelicula);
    
}

var edad = 30;
var texto = "soy ANA";
holaMundo(texto);

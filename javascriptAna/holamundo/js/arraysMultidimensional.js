'use strict'

//ARRAYS MULTIDIMENSIONALES: Arrays dentro de otro arrays.

var genero = ["Terror", "Comedia", "Romantico", "Acción"];
var pelicula = ["It", "Como Dios", "Titanic", "Jungla de Cristal"];

var cine = [genero, pelicula];
/*
console.log(cine);
console.log(cine [0][0]); //llamamos a Terror
console.log(cine [0][1]); //llamamos a Comedia
console.log(cine [0][2]); //llamamos a Romantico
console.log(cine [0][3]); //llamamos a Accion
console.log(cine [1][0]); //llamamos a It
console.log(cine [1][1]); //llamamos a Como Dios
console.log(cine [1][2]); //llamamos a Titanic
console.log(cine [1][3]); //llamamos a Jungla de Cristal
*/

//Como añadir un elemento a una array

pelicula.push("Batman", "Los 3 mosqueteros");
console.log(pelicula)

//Como eliminar el último elemento de array

pelicula.pop();
console.log(pelicula);

//Si queremos pedirle a un usuario que meta peliculas para que se vayan incluyendo a la array, podemos hacer lo siguiente:

var elemento = " ";
/*
do{
    elemento = prompt("INTRODUCE TUS PELIS FAVORITAS");
    pelicula.push(elemento);
}while(elemento != "ACABAR");
pelicula.pop();
console.log(pelicula);
*/

//PARA ELIMINAR UN ELEMENTO CONCRETO DE LA ARRAY primero tenemos que hacer un indexof para localizarlo

var indice = pelicula.indexOf("Titanic");
//console.log(indice);
if(indice > -1){
    pelicula.splice(indice, 1); //ponemos 1 porque solo queremos eliminar el array de la posicion 2. Si pusieramos 2, nos eliminaria la posicion 2 y la 3 (titanic y jungla de cristal)
}
console.log(pelicula);

//PARA CONVERTIR UN ARRAY A TEXTO
//Primero creamos una nueva variable para ese listado

var listadoPeliculas = pelicula.join();
console.log(listadoPeliculas);
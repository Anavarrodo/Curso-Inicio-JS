'use strict'

//ARRAYS MULTIDIMENSIONALES
//SON ARRAYS DENTRO DE OTRO ARRAY

var genero = ["Terror", "Comedia", "Romantica", "Accion", "Ciencia Ficcion"]
var peliculas = ["IT", "Como Dios", "Moulin Rouge", "A todo gas", "Alien"]

var cine = [genero, peliculas]

console.log(cine[0][1]) //accedo a comedia [0] = genero y [1] = comedia dentro de categoria
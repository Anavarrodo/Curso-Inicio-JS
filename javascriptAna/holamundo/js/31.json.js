'use strict'

//JSON - JavaScript Object Notation

var pelicula = {
    titulo: "Resacon en las Vegas",
    año: 2014,
    pais: "Estados Unidos"
};

var peliculas = [
    {titulo: "Algo pasa con Mary", año: 1998, pais: "Estados Unidos"},
    pelicula
]

var caja_peliculas = document.querySelector("#peliculas")
var indice;
for(indice in peliculas){
    var p = document.createElement('p')
    p.append(peliculas[indice].titulo + " - " + peliculas[indice].año)
    caja_peliculas.append(p)
}
console.log(caja_peliculas)

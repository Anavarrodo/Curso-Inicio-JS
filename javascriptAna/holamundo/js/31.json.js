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



var cocina = ["sartenes", "horno", "frigorifico", "tostadora", "vitroceramica"]
var salon = ["sofa", "sillas", "mesas", "tv", "muebles", "lampara"]
var dormitorio = ["cama", "ropero", "mesa de noche", "baño"]
var baño = ["vater", "lavabo", "vide", "ducha", "bañera"]

var casa = [cocina, salon, dormitorio, baño]

var entrada = prompt("Introduce una habitacion de la casa");
document.write("<h3>Cosas que puedes encontrar en " + entrada + "</h3>")
var resultado = sacarDepartamentoDeCasa(entrada)
resultado.forEach(element => {
    document.write("<li>" + element + "</li>")
});
function sacarDepartamentoDeCasa(elemento){
    switch(elemento){
        case "cocina":
        return casa[0]
        break;
        case "salon":
        return casa[1]
        break;
        case "dormitorio":
        return casa[2]
        break;
        case "baño":
        return casa[3]
        break;
    }
}

console.log(resultado)
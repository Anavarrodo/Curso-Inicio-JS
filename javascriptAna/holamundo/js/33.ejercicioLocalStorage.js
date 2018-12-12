'use strict'

var formulario = document.querySelector("#formulario")

formulario.addEventListener('submit', function(){
var titulo = document.querySelector("#añadirPelicula").value
if(titulo.length >= 1){
    localStorage.setItem(titulo, titulo)
}

var indice;
for(indice in localStorage){
    if(typeof localStorage[i] == "string"){
        var todasLasPeliculas = document.querySelector("#peliculas")
        var li = document.createElement('li')
        li.append(localStorage[indice])
        todasLasPeliculas.append(li)
        
    }
  
}

})
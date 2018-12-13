'use strict'

var forumlario = document.querySelector("#formPelicula")

forumlario.addEventListener('submit', function(){
    var titulo = document.querySelector("#añadirPelicula").value
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo)
    }
})

var ul = document.querySelector("#peliculasList")
for(var i in localStorage){
    console.log(localStorage[i])
    if(typeof localStorage[i] == "string"){
        var li = document.createElement('li')
        li.append(localStorage[i])
        ul.append(li)
    }
   
}

var forumlario = document.querySelector("#formBorrarPelicula")

forumlario.addEventListener('submit', function(){
    var titulo = document.querySelector("#borrarPelicula").value
    if(titulo.length >= 1){
        localStorage.removeItem(titulo)
    }
})
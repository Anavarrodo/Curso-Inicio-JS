'use strict'

//DOM - Document Object Model
//ARBOL DE NODOS
window.addEventListener('load', function(){
    function cambiarColor(color){
        caja.style.background = color
    }

    //Conseguir elementos con Id concreto. Solo puede haber una etiqueta con ese nombre de id

    //var caja = document.getElementById("micaja")
    var caja = document.querySelector("#micaja")

    caja.innerHTML = "AHORA SOY UN CARACOL!!"
    caja.style.background = "pink"
    caja.style.padding = "20px"
    caja.style.color = "white"
    caja.className = "hola hola"

    //Conseguir elementos por su etiqueta.

    var todosLosDivs = document.getElementsByTagName('div')
    var seccion = document.querySelector('#miseccion')
    var hr = document.createElement('hr')
    var valor;
        for(valor in todosLosDivs){
            if(typeof todosLosDivs[valor].textContent == "string"){
            var parrafo = document.createElement('p')
            var texto = document.createTextNode(todosLosDivs[valor].textContent)
            parrafo.append(texto)
            seccion.append(parrafo)
            }
        }
    seccion.append(hr)

    //Conseguir elementos por su clase CSS

    var divsRojos = document.getElementsByClassName('rojo')
    var indice;
    for(indice in divsRojos){
        if(divsRojos[indice].className == "rojo"){
            divsRojos[indice].style.color = "red"
        }
    }
    var divsAmarillo = document.getElementsByClassName('amarillo')
    divsAmarillo[0].style.color = "yellow"
    
})

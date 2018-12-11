'use strict'

//BOM - Browser Object Model

window.addEventListener('load', function(){
    //como sacar la medida de la pantalla que ve el usuario(siempre es el mismo tamaño)
    console.log("La anchura para el usuario es: " + screen.width)
    console.log("La altura para el usuario es: " + screen.height)
    //como sacar la medida de la pantalla que yo veo con consola abierta:
    console.log("La anchura para mi con consola abierta es: " + window.innerWidth)
    console.log("La altura para mi con consola abierta es: " + window.innerHeight)

    //como sacar la url la página en la que estoy:
    console.log("URL de esta página: " + window.location.href)
    //si quiero hacer una funcion, que al llamarla me redireccione a otra página...
    function redirigir(url){
        window.location.href = url
    }
    //si quiero que me rediriga a una web desde una pestaña nueva...
    function abrirVentana(url){
        window.open(url)
    }
    //si quiero que me rediriga a una web desde una pestaña nueva pero del tamaño que yo le indique...
    function abrirVentanaConTamaño(url){
        window.open(url,"","height=400,width=300")
    }
})
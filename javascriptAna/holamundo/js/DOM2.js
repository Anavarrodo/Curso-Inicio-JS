'use strict'

var todos = document.getElementsByTagName('div');
var primeraBanda = document.getElementsByClassName('primera')
var segundaBanda = document.getElementsByClassName('segunda')
var terceraBanda = document.getElementsByClassName('tercera')
const NEGRO = "black";
const AMARILLO = "yellow";
const ROJO = "red";
const AZUL = "blue";
const VERDE = "green"
const BLANCO = "white"
const NARANJA = "orange"
var lista = document.getElementById("opciones");
 
function radioSelector(){
    var elementos = document.getElementsByName("pais");
 
for(var i=0; i<elementos.length; i++) {
 if (elementos[i].checked){
     console.log("elemento--->"+elementos[i].value)
     switch (elementos[i].value){
        case "belgica":
        belgica()
        break;
        case "francia":
        francia()
        break;
        case "irlanda":
        irlanda();
        break;
        case "espana":
        spain();
        break;
        default:
        aBlanco()
        break;

    }
 }
}
}

function selector(){
// Obtener el índice de la opción que se ha seleccionado
var indiceSeleccionado = lista.selectedIndex;
// Con el índice y el array "options", obtener la opción seleccionada
var opcionSeleccionada = lista.options[indiceSeleccionado];
// Obtener el valor y el texto de la opción seleccionada
var textoSeleccionado = opcionSeleccionada.text;
var valorSeleccionado = opcionSeleccionada.value;
    console.log("Indice seleccionado -->"+opcionSeleccionada.value)
    switch (opcionSeleccionada.value){
        case "1":
        belgica()
        break;
        case "2":
        francia()
        break;
        case "3":
        irlanda();
        break;
        case "4":
        spain();
        break;
        default:
        aBlanco()
        break;

    }
}
function aBlanco(){
    setColor(primeraBanda,BLANCO);
    setColor(segundaBanda,BLANCO);
    setColor(terceraBanda,BLANCO);
}

function belgica(){
    setColor(primeraBanda,NEGRO);
    setColor(segundaBanda,ROJO);
    setColor(terceraBanda,AMARILLO);
}
function francia(){
    setColor(primeraBanda,AZUL);
    setColor(segundaBanda,BLANCO);
    setColor(terceraBanda,ROJO);
}

function irlanda(){
    setColor(primeraBanda,VERDE);
    setColor(segundaBanda,BLANCO);
    setColor(terceraBanda,NARANJA)

}
function spain(){
    setColor(primeraBanda,ROJO);
    setColor(segundaBanda,AMARILLO);
    setColor(terceraBanda,ROJO)
}




function cambiarColorPorID(id,color){
    console.log("El ID--->"+id)
    console.log("El Color--->"+color)
    var a = document.getElementById(id)
    console.log("La variable una vez recogido el valor--->"+a)
    a.style.background = color;
}

function spainPatriot(){
console.log("Numero de elmentos--->"+todos.length)
for(var element in todos){
    console.log("Elmento--->"+element)
    if (element<=1||element> 3){
        todos[element].style.background = "red"
    }else{
        todos[element].style.background = "yellow"
    }
}

}

function catalufo(){
    console.log("Numero de elmentos--->"+todos.length)
    for(var element in todos){
        console.log("Elmento--->"+element)
        if (element%2==0){
            todos[element].style.background = "red"
        }else{
            todos[element].style.background = "yellow"
        }
    }
}




function setColor(coleccion, color){
    console.log("Numero de elmentos--->"+todos.length)
    for(var indice in coleccion ){
        console.log("Elmento--->"+indice+ ", Tipo---> "+coleccion[indice])
        if(indice >= (coleccion.length -3)){
        coleccion[indice].style.background = color
        coleccion[indice].innerHTML = "-";
        }
    }
}
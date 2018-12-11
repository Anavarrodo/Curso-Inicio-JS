'use strict'

//1. CREA UN ARRAY DE NOMBRES Y UN ARRAY DE APELLIDOS Y PINTA POR CONSOLA UNA FRASE SALUDANDO A TODOS POR SU NOMBRE Y APELLIDOS
//ORDENAR LOS NOMBRES POR ORDEN ALFABETICO
var nombres = ["Ana", "Pedro", "Lola", "Anastasia", "Carmen", "Carolina"]
var apellidos = ["Navarro", "Gonzalez", "Perez", "Mora", "Dominguez", "Herrera"]
console.log(nombres.sort())
for(var i = 0; i < nombres.length; i++){
    var presentacionNombre = nombres[i]
    var presentacionApellidos = apellidos[i]
    //console.log("Mi nombre es: " + nombres[i] + " y está en la posición " + nombres.indexOf(nombres[i])) 
    //console.log("Mi nombre es: " + apellidos[i] + " y está en la posición " + apellidos.indexOf(apellidos[i])) 
    console.log("Hola!! soy: " + presentacionNombre + " " + presentacionApellidos) 
}

//2.CREA UN ARRAY CON MODELOS DE COCHES Y OTRO CON MARCAS COCHES Y PINTAR UNA FRASE DICIENDO MARCA Y MODELO

var marcasDeCoche = ["Audi", "Citroen", "Ford", "Opel", "Mercedes", "BMW"]
var modelosDeCoches = ["Corsa", "x1", "glc", "a3", "c4", "Fiesta"]

function busquedadeModeloPorMarca(marca){
    //console.log("la marca del coche es: " + marca)
    switch(marca){
        case "Audi":
        console.log("Su modelos es: " + modelosDeCoches[3])
        break;
        case "Citroen":
        console.log("Su modelos es: " + modelosDeCoches[4])
        break;
        case "Ford":
        console.log("Su modelos es: " + modelosDeCoches[5])
        break;
        case "Opel":
        console.log("Su modelos es: " + modelosDeCoches[0])
        break;
        case "Mercedes":
        console.log("Su modelos es: " + modelosDeCoches[2])
        break;
        case "BMW":
        console.log("Su modelos es: " + modelosDeCoches[1])
        break;
    }
}

//3.CREAR UN ARRAY DE MARCA DE COCHE CON SUS MODELOS Y QUE ME SAQUE TODOS SUS MODELOS AL LLAMAR A LA MARCA.
var audi = ["A1", "A3", "A4", "Q2", "R8", "RS"]
var citroen = ["Berlingo", "C4", "C2", "E-Mehari", "C-Zero", "C-Elysee"]
var ford = ["Fiesta", "Ecosport", "Focus", "Kuga", "Tourneo", "Mondeo"]
var opel = ["Astra", "Corsa", "Adam", "Karl", "Zafira", "Insignia"]
var mercedes = ["CLA", "Clase A", "GLC", "SLC", "GLE", "AMG-GT"]
var bmw = ["Serie 5", "X2", "Z4", "M3", "i8", "X7", "X8"]

var marcasDeCocheCompletas = [audi, citroen, ford, opel, mercedes, bmw]
var pedirMarca = prompt("dime una marca")

var resultado = recuperarArrayPorNombre(pedirMarca)
document.write("<h1>MODELOS DISPONIBKES DE LA MARCA " + pedirMarca.toUpperCase() + " </h1>")
resultado.forEach(element => {
    console.log("modelo =  " + element )
    document.write("<li>" + element + " </li>")
});

function recuperarArrayPorNombre(marca){
    switch(marca){
        case "audi":
        return  marcasDeCocheCompletas[0]
        break;
        case "citroen":
        return  marcasDeCocheCompletas[1]
        break;
        case "ford":
        return  marcasDeCocheCompletas[2]
        break;
        case "opel":
        return  marcasDeCocheCompletas[3]
        break;
        case "mercedes":
        return  marcasDeCocheCompletas[4]
        break;
        case "bmw":
        return  marcasDeCocheCompletas[5]
        break;
    }
}

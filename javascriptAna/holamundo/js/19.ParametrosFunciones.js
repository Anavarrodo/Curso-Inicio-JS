'use estrict'

//PARAMETROS REST Y SPREAD

function listadoFrutas (fruta1, fruta2, ...masFrutas){
    console.log("Fruta1 es: " + fruta1)
    console.log("Fruta2 es: " + fruta2)
    console.log(masFrutas)
}
listadoFrutas("Naranjas", "Manzanas","Peras", "Cocos", "Fresas" )

//REST
//Que pasa si quiero añadirle mas parametros? ej: listadoFrutas("Naranjas", "Manzanas", "Peras", "Cocos", "Fresas")
//por consola solo saldrán las frutas 1 y 2 que son las que estan ejecutadose en nuestra funcion.
//le añado los 3 puntos al siguiente parametro masFrutas y me lo convierte en un array() es el resto
/* console.log
Fruta1 es: Naranjas
19.ParametrosFunciones.js:7 Fruta2 es: Manzanas
19.ParametrosFunciones.js:8 (3) ["Peras", "Cocos", "Fresas"]
*/

//SPREAD
var frutas = ["Naranjas", "Manzanas"]
listadoFrutas(...frutas ,"Peras", "Cocos", "Fresas" )

//FUNCIONES ANONIMAS Y CALLBACK
//FUNCIONES ANONIMAS. ES UNA FUNCION QUE NO TIENE NOMBRE
var peliculas = function(nombre){
    return "La pelicula es: " + nombre
}

//CALLBACK. ES UNA FUNCION QUE SE EJECUTA DENTRO DE OTRA FUNCION

function sumame(numero1, numero2, sumaYMuestra, sumaPorDos){
    var sumar = numero1 + numero2
    sumaYMuestra(sumar)
    sumaPorDos(sumar)
    return sumar;
}

console.log(sumame(52, 38, function(dato){
    console.log("La suma es: " + dato)
}, function(dato){
    console.log("La suma por dos es: " + (dato*2))

}))

//FUNCIONES FLECHA.CON EL EJEMPLO ANTERIOR.
/*
console.log(sumame(52, 38, dato => {
    console.log("La suma es: " + dato)
}, dato => {
    console.log("La suma por dos es: " + (dato*2))

}))
*/
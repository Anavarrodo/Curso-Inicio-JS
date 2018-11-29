'use strict'

//FUNCIONES ANONIMAS. Es una funcion que no tiene nombre
//CALLBACK. Es una funcion que se ejecuta dentro de otra

function sumame (numero1, numero2, sumaYmuestra, sumaporDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaporDos(sumar);
    return sumar;// el return ahora no hace nada 
}
sumame (5, 5, function(dato){
    console.log("la suma es " + (dato))
}, function(dato){
    console.log("la suma por dos es " + (dato*2))
});

/*
FUNCIONES FLECHA: 
Cuando realizamos function(){} en callback, en lugar de poner 
function(dato){
    console.log("la suma es " + (dato))
}, function(dato){
    pues lo ponemos asi sin parentesis al parametro y con flechas, así:
    dato =>{
    console.log("la suma es " + (dato))
}, dato =>{
    */

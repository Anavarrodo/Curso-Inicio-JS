'use strict'

//ARRAYS.coleccion de valores dentro de una matriz. dentro de los arrays se puden meter string, enteros, booleanos, lo que queramos y se pueden definir de dos formas.

var nombre = "Ana Navarro";
var nombres = ["Ana Navarro", "Pedro de la Fuente", "Encarna Dominguez", "Guadalupe Espinosa", 52, true];
var lenguajes = new Array ("Español", "Ingles", "Italiano", "Frances", "Mongol", "Arabe", "Ruso", "Rumano");

console.log(nombres);
console.log(lenguajes);

//como buscar una posicion dentro del array:

console.log(lenguajes[3]);

//como mostrar la longitud, los elementos de una array
//console.log(lenguajes.length);
//console.log(nombres.length);

//si queremos pedirle a un usuario cuál es el elemento que queremos mostrar:
//y, si introducimos un número que no existe, xej. el 6 en nombres, nos de un error.
/*
var elemento = parseInt(prompt("Qué elemento quieres mostrar?"));
if(elemento >= nombres.length ){
    alert("Introduce números existentes menor que " + nombres.length);
    
}else{
    console.log("El elemento seleccionado corresponde a " + nombres[elemento])        
}
*/

//Si queremos mostrar todos los elementos de la arrays por pantalla creamos un bucle for.
/*
document.write("<h2>Estos son los idiomas del mundo</h2>");
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>")
}
document.write("</ul>");
*/

//OTRA MANERA DE RECORRER UN ARRAY DE MANERA MÁS ELEGANTE ES CON EL FOREACH
//el forEach se compone de (function(valor(los elementos dentro de la array), indice(posicion que ocupa dentro de la array),
// y array){}). en el ej. de abajo en lugar de poner function hacemos una funcion flecha.
/*
lenguajes.forEach((valor, indice)=>{
    document.write("<li>" + valor + "</li>")

});
*/

/*
//OTRA FORMA DE RECORRER UN ARRAY ES CON FOR IN for(in){};
 for(indice in nombres){
     document.write("<li>" + nombres[indice] + "</li>")
 };
*/

 //BUSQUEDA DENTRO DE UN ARRAY. Utilizamos find();
 //si en lugar de find(), utilizo findIndex, lo que me diria seria que posicion ocupa esa palabra en el array, en este caso e 0.
/*
 var busqueda = nombres.find(function(indice){
     return indice == "Ana Navarro"
 })
console.log(busqueda);
*/

//busqueda de algun valor dentro de una array. metodo some();

var precios = [10, 20, 50, 80, 100];
var busqueda = precios.some(function(bla){
    return bla > 99;
})
console.log(busqueda);

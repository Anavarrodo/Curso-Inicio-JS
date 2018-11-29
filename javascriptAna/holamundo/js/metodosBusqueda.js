'use strict'

//METODOS DE BUSQUEDA.buscar una palabra dentro de un texto. 
//Para ello utilizamos el método .indexOf() o .search() e introducimos la palabra con comillas que queremos buscar dentro del parentesis. este encuentra la primera coincidencia.
//Para encontrar la última coincidencia utilizariamos .lastIndexOf()
//Para hacer una busqueda más extensa de donde se encuentra, en qué linea, etc utilizamos el .match()
//si quiero que me haga una búsqueda de todas las veces que aparece esa palabra, utilizamos el .match(/palabra/gi) sin comillas
/*Para buscar todas las palbras que aparezcan desde un caracter a otro utilizamos el .substr() en introducimos en el parentesis primero desde el caracter que queremos que busquemos seguido
 de cuantos caracteres quiero que me enseñe. es decir a partir del caracter 14, enseñame 5 caracteres (14,5) En este ejemplo seria rid
 */
//.charAt(). entre parentesis le decimos el numero de caracter y nos indica a cual corresponde.
//el metodo .startsWith("") se utiliza para buscar el inicio de un string. xej. ("Mi marido"). y te devuelve un true o false
// .endsWith("") igual que el anterior pero con las ultimas palabras. xej. ("¿Mejor?")
// Para buscar cualquier palabra utilizamos el .includes("")
// .replace("","") sirve para sustituir una palabra/s de tu texto por otra.
/* .slice() es para que nos enseñe todo lo que hay desde el numero de caracter que le indicamos en el parentesis. hace un corte en la cadena de string.
Aunque tambien podemos decirle donde queremos que corte (,)
*/
// .split() se utiliza para que nos convierta el texto en arrays. si en el parenrtesis le metemos un espacio nos lo separa en arrays. corta las palabras en arrays
// .trim() lo que hace es eliminar los espacios que hayan por delante y por detras del texto

var texto = "      Mi marido Pedro es un cabronazo desde que se levanta hasta que se acuesta, cabronazo ¿Mejor?    ";


//var busqueda = texto.indexOf("bella");
//var busqueda = texto.search("bella");
//var busqueda = texto.lastIndexOf("bella");
//var busqueda = texto.match("cabronazo");
//var busqueda = texto.match(/cabronazo/gi);
//var busqueda = texto.substr(5, 3);
//var busqueda = texto.startsWith("Mi marido");
//var busqueda = texto.endsWith("¿Mejor?");
//var busqueda = texto.includes("desde");
//var busqueda = texto.replace("Mi marido", "Mi novio");
//var busqueda = texto.slice(10);
//var busqueda = texto.slice(10,16);
//var busqueda = texto.split(" ");
var busqueda = texto.trim();

console.log(busqueda); //esta en el caracter 25(indexOf y search) y en el 42(lastIndexOf)



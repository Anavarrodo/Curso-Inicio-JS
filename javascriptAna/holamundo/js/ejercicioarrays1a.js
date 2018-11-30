'use strict'

/*
1. PIDA 6 NUMEROS POR PANTALLA Y LOS CONVIERTA EN ARRAYS
2. MOSTRAR EL ARRAY ENTERO EN EL CUERPO DE LA PAGINA Y EN LA CONSOLA
3. ORDENARLO Y MOSTRARLO
4. INVERTIRLO Y MOSTRARLO
5. MOSTRAR CUANTOS ELEMENTOS TIENE EL ARRAY
6. BUSQUEDA DE UN VALOR INTRODUCIDO POR EL USUARIO Y SU POSICION (INDICE)
*/
/*
var ejercicio = crearNumero();
mostrarArrayPorConsola(ejercicio);
mostrarArrayPorCuerpo(ejercicio);
ordenarArray(ejercicio);
invertirArray(ejercicio);
mostrarElementos(ejercicio);
nuevoNumero();
busquedaPosicion(ejercicio, nuevoNumero());


//1. PIDA 6 NUMEROS POR PANTALLA Y LOS CONVIERTA EN ARRAYS
function crearNumero(){
console.log("Hemos introducido 6 numeros")
var numero = new Array(6);
for(var i = 0; i <= 5; i++){
    numero[i] = parseInt(prompt("INTRODUCE UN NUMERO"))
}
return numero;
}

//2. MOSTRAR EL ARRAY ENTERO EN EL CUERPO DE LA PAGINA Y EN LA CONSOLA
function mostrarArrayPorConsola(array){
console.log("Hemos convertido los numeros en arrays")
console.log(array)
}

function mostrarArrayPorCuerpo(array2){
    console.log("Estoy mostrando los arrays por el cuerpo")
    document.write("<h3>Estoy mostrando los arrays por el cuerpo</h3>")
    array2.forEach(function(valor){
    document.write("<li>" + valor + "</li>")
})
}

//3. ORDENARLO Y MOSTRARLO
function ordenarArray(array3){
console.log("Estoy ordenando los arrays")
document.write("<h3>Estoy ordenando los arrays</h3>")
array3.forEach(function(valor){
document.write("<li>" + valor + "</li>")
})
}

//4. INVERTIRLO Y MOSTRARLO
function invertirArray(array4){
    console.log("Estoy invirtiendo el orden del array")
    document.write("<h3>Estoy invirtiendo el orden del array</h3>")
    array4.forEach(function(valor){
    document.write("<li>" + valor + "</li>")
    })
}

//5. MOSTRAR CUANTOS ELEMENTOS TIENE EL ARRAY
function mostrarElementos(array5){
    console.log("Estoy mostrando cuantos elementos tiene mi array")
    array5.length;
    document.write("Mi array tiene " + array5.length + " elementos <br/>")
}

//6. BUSQUEDA DE UN VALOR INTRODUCIDO POR EL USUARIO Y SU POSICION (INDICE)
function nuevoNumero(){
    console.log("estoy pidiendo un numero para buscar")
    var numero = parseInt(prompt("Introduce un numero para buscar"))
    return numero;
}

function busquedaPosicion(array6, buscado){
    console.log("en buscar valor en array ")
    console.log("array= " + array6 + " y valor = " + buscado);
    document.write("La posicion de " + buscado + " es " + array6.indexOf(buscado))
}
*/

//SEGUN EL CURSO DE JAVASCRIP
function mostrar (elemento, textoCustom = " "){
    document.write("Lista de arrays " + textoCustom)
    elemento.forEach(function(valor){
    document.write("<li>" + valor + "</li>")
    })
}

var numeros = [];
for(var i = 0; i <= 5; i++){
    numeros.push(parseInt(prompt("INTRODUCE UN NUMERO")));
}
//MOSTRAR POR CONSOLA
console.log(numeros);

//MOSTRAR POR CUERPO
document.write("<h3>Listado de arrays</h3>")
mostrar(numeros);

//MOSTRAR ORDENADO
numeros.sort();
mostrar(numeros, "ordenado");

//MOSTRAR INVERTIDO
numeros.reverse();
mostrar(numeros, "invertido");

//MOSTRAR ELEMENTOS DE UNA ARRAY
document.write("<h3>El array tiene " + numeros.length + " posiciones</h3>")

//BUSQUEDA DE UN VALOR INTRODUCIDO Y POSICION
var busqueda = parseInt(prompt(" QUE NUMERO QUIEIRS BUSCAR"))
var posicion = numeros.findIndex(numero => numero == busqueda);
if(posicion && posicion != -1){
    document.write("<h3>ENCONTRADO!!</h3>")
    document.write("<h3>posicion de la busqueda es " + posicion + "</h3>")
}else{
    document.write("NO LO HAS ENCONTRADO")
}


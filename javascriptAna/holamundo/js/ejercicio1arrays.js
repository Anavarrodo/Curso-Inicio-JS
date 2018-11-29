'use strict'

/*
1. PIDA 6 NUMEROS POR PANTALLA Y LOS CONVIERTA EN ARRAYS
2. MOSTRAR EL ARRAY ENTERO EN EL CUERPO DE LA PAGINA Y EN LA CONSOLA
3. ORDENARLO Y MOSTRARLO
4. INVERTIRLO Y MOSTRARLO
5. MOSTRAR CUANTOS ELEMENTOS TIENE EL ARRAY
6. BUSQUEDA DE UN VALOR INTRODUCIDO POR EL USUARIO Y SU POSICION (INDICE)
*/


//Pedir los numeros por consola

var numeros = recogerDatosArray() 
//2. MOSTRAR EL ARRAY ENTERO EN EL CUERPO DE LA PAGINA Y EN LA CONSOLA
mostrarArrayPorCuerpoYConsola(numeros)
//3. ORDENARLO Y MOSTRARLO
ordenarYMostrarArray(numeros)
//4. INVERTIRLO Y MOSTRARLO
invertirloYMostrarlo(numeros);
//5. MOSTRAR CUANTOS ELEMENTOS TIENE EL ARRAY
mostrarTamañoDelArray(numeros);
//6. BUSQUEDA DE UN VALOR INTRODUCIDO POR EL USUARIO Y SU POSICION (INDICE)
busquedaDeUnValorEnArray(numeros, recibirNumero());












function busquedaDeUnValorEnArray(array6, buscado){
    console.log("en buscar valor en array ")
    console.log("array= " + array6 + " y valor = " + buscado);
    document.write("<h2>EN busquedaDeUnValorEnArray()</h2>")
    if(array6.indexOf(buscado)== -1){
        console.log("el valor no esta en el array")
        document.write("<h3>La posicion de " + buscado + " no existe xq no esta en el array</h3>")
    }
    document.write("<h3>La posicion de " + buscado + " es " + array6.indexOf(buscado) + "</h3>")
}

function recibirNumero(){
    console.log("En recibir un numero")
   var resultado = parseInt(prompt("Introduce un número"))
    return resultado;
}



function mostrarTamañoDelArray(array5){
    document.write("<h2>EN mostrarTamañoDelArray()</h2>")
    document.write("<h3>El tamaño del array es " + array5.length + "</h3>")
    
}


function invertirloYMostrarlo (array4){
    document.write("<h2>EN invertirloYMostrarlo()</h2>")
    array4.reverse();
    pintarArrayPorCuerpo(array4);
}


function ordenarYMostrarArray(array3){
    document.write("<h2>EN ordenarYMostrarArray()</h2>")
array3.sort()
pintarArrayPorCuerpo(array3)
}


function pintarArrayPorCuerpo(array){
    document.write("<h2>EN pintarArray()</h2>")
    array.forEach(function(valor){
        document.write("<li>" + valor + "</li>");
    })
}
function mostrarArrayPorCuerpoYConsola(array2){
    document.write("<h2>EN mostrarArrayPorCuerpoYConsola()</h2>")
    console.log(array2);
    pintarArrayPorCuerpo(array2)
}

function recogerDatosArray(){
    console.log("En recogerDatosArray->")
    var resultado = new Array (6);
    for(var i = 0; i <= 5; i++){
        resultado[i]= recibirNumero()
    }
    return resultado;
}


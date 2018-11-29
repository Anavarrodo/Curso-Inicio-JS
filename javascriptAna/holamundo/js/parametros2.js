'use strict'

//PARAMETROS REST. se ponen ... delante del parametro global. y ya se añaden a la funcion. al ser spring se ponen ""
/*
function listadoFrutas(fruta1, fruta2, ...restoFrutas){
    console.log("Fruta1 es " + fruta1);
    console.log("Fruta2 es " + fruta2);
    console.log("El resto de frutas son " + restoFrutas);
}

listadoFrutas("Melon", "Sandia", "Melocoton", "Pera", "Piña", "Platano");
*/
//PARAMETROS SPREAD.

function listadoFrutas(fruta1, fruta2, fruta3, ...restoFrutas){
    console.log("Fruta1 es " + fruta1);
    console.log("Fruta2 es " + fruta2);
    console.log("Fruta3 es " + fruta3);
    console.log("El resto de frutas son " + restoFrutas);
}
var frutas = ["Melon"]
listadoFrutas(...frutas, "Sandia", "Melocoton", "Pera", "Piña", "Platano");
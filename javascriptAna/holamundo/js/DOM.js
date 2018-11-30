'use strict'

//DOM. DOCUMENT OBJECT MODEL. seleccionar y manipular los diferentes elementos de una pg

function cambiarColor(color){
    caja.style.background = color;
}

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja"); //puedo modificar desde consola los estilos porej.de mi id caja

caja.innerHTML = "AHORA SOY ANA, NO UNA CAJA"
caja.style.background = "green";
caja.style.color = "white";
caja.style.padding = "25px";
caja.className = "Hola!!!!!"


console.log(caja);

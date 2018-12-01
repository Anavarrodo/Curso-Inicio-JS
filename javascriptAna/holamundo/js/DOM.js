'use strict'

//DOM. DOCUMENT OBJECT MODEL. seleccionar y manipular los diferentes elementos de una pg
//DIV es una etiqueta que se crea para definir un bloque.






// CONSEGUIR ELEMENTOS CON UN ID CONCRETO. un id es unico, por lo que solo puede haber un elemento un con su etiqueta.
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

//CONSEGUIR ELEMENTOS POR TU ETIQUETA

var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs); //nos aparece un array con todos los elementos(todos los divs):

//var contenidoEnTexto = todosLosDivs[2].textContent; //el textContent se usa para sacar el contenido de ese array
/*
var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Ahora soy una almohada, no una caja!!" // Con el innerHTML modificio ese array
contenidoEnTexto.style.color = "pink";
console.log(contenidoEnTexto);
*/
//TAMBIEN PODRIA RECORRER TODOS LOS DIVS QUE HAY:
//Para ello hemos creado una nueva etiqueta en el index que es una seccion(miseccion)
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr")
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == "string"){    
    var crearParrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    crearParrafo.append(texto);
    seccion.append(crearParrafo);
}
}
seccion.append(hr);

//CONSEGUIR ELEMENTOS POPR SU CLASE CSS
//para empezar vamos a ponerle una clase a nuestros div. uno de ellos sera rojo y los otros dos van a compartir la clase amarillo
var divsAmarillo = document.getElementsByClassName("amarillo");
var div;
for(div in divsAmarillo){
    if(divsAmarillo[div].className == "amarillo"){
    divsAmarillo[div].style.background = "yellow";
    }    
}
var divRojo = document.getElementsByClassName("rojo")
divRojo[0].style.background = "red";

console.log(caja);

//QUERY SELECTOR
//Se utiliza mejor para pequeñas cosas, para seleccionar clases seria mejor el getElementsByNameClass
var id = document.querySelector("#encabezado");
console.log(id);

var claseRoja = document.getElementsByClassName("rojo");
console.log(claseRoja);

var claseAmarilla = document.getElementsByClassName("amarillo");
console.log(claseAmarilla);

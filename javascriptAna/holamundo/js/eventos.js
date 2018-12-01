'use strict'

//EVENTOS: FUNCIONES QUE SE EJECUTA CADA VEZ SUCEDE ALGO(<XEJ.Cuando el usuario mueve el raton, cuando le da click a algo...)
//onclick 1 solo click
//ondblclick 2 click seguidos

//EVENTO LOAD: CUANDO HEMOS CREADAO EL SCRIP DE HTML PARA EL DOM Y EL BOM LO HEMOS TENIDO QUE PONER EN EL BODY Y AL FINAL, PORQUE
//PRIMERO TIENEN QUE EJECUTARSE TODO ANTES DE PODER HACERLO FUNCIONAR. PUES EL LOAD, PERMITE QUE SUBAMOS EL SCRIPT AL HEAD 
//METIENDOLO TODO DENTRO DE UN  windown.addEventsListener('load', function(){---AQUI---});

window.addEventListener('load', function(){
var boton = document.querySelector("#boton");

function cambiarColor(){
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "pink";
    }else{
        boton.style.background = "green";
    }
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";
    return true;
}
//EVENTO CLICK
boton.addEventListener('click', function(){
    cambiarColor();
});

//MOUSE OVER. Cuando pasamos la flecha sobre algo
boton.addEventListener('mouseover', function(){
    boton.style.background = "#ccc";
})

//MOUSEOUT. Cuando pasamos la flecha sobre algo
boton.addEventListener('mouseout', function(){
    boton.style.background = "orange";
})

//FOCUS. cuando clico en el formulario
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus', function(){
    console.log("(focus)estas dentro del input")
});
//BLUR. cuando salgo del formulario
var input = document.querySelector("#campo_nombre");
input.addEventListener('blur', function(){
    console.log("(blur)estas fuera del input")
});
//KEYDOWN. solo funciona cuando estas pulsando una tecla y pupedo saber que tecla pulsa con String.fromCharCode(event.keyCode)
var input = document.querySelector("#campo_nombre");
input.addEventListener('keydown', function(events){
    console.log("(keydown)estas pulsando la tecla", String.fromCharCode(event.keyCode));
});
//KEYPRESS.cuando presiono una tecla
var input = document.querySelector("#campo_nombre");
input.addEventListener('keypress', function(events){
    console.log("(keypress)tecla presionada", String.fromCharCode(event.keyCode));
});
//KEYUP.cuando suelto la tecla presionada
var input = document.querySelector("#campo_nombre");
input.addEventListener('keyup', function(events){
    console.log("(keyup)tecla soltada", String.fromCharCode(event.keyCode));
})
})
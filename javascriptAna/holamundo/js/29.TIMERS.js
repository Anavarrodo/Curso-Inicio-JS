'use strict'

//TIMERS - se utiliaza para ejecutar un trozo de codigo cada x segundos.
//tenemos dos metodos: setInterval y setTimeout (este ultimo se ejecuta solo una vez)
//clearInterval(var que queremos parar) Cancela una acción reiterativa que se inició mediante una llamada a setInterval.
/*
setInterval(fucntion(){
}, tiempo en milisegundos)
*/

function intervalo(){
    var tiempo = setInterval(function(){
        console.log("setInterval se está ejecutando")
        var encabezado = document.querySelector('h3')
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "25px"
        }else{
            encabezado.style.fontSize = "50px"
        }  
    }, 1000)
    return tiempo;
}
var tiempo = intervalo();

var stop = document.querySelector("#stop")
stop.addEventListener('click', function(){
    console.log("has parado la ejecucion")
    clearInterval(tiempo)
    })

var start = document.querySelector("#start")
start.addEventListener('click', function(){
    console.log("has iniciado la ejecucion")
    interval();
    })
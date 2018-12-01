'use strict'

//BOM browser Object Model


//con el inner nos muestra los px de la pgweb con la consola abierta, el screen como lo ve el usuario
function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}
//También puedo ver la URL que hay ahora mismo, la que está siendo cargada
function redirigir(url){
    window.location.href = url;
}
//O puede abrirnos una nueva ventana en el navegador
function abrirVentana(url){
    window.open(url, "", "width=400, height=300")
}
getBom();



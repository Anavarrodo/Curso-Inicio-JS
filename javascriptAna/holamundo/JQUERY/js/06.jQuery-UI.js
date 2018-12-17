$(document).ready(function(){
    console.log("jQuery Cargado!!")

    //MOVER ELEMENTOS
    $('.elemento').draggable()

    //REDIMENSIONAR ELEMENTOS
    $('.elemento').resizable()

    //SELECCIONAR ELEMENTOS
   // $('.lista').selectable()

    //ORDENAR ELEMENTOS
    $('.lista').sortable({
        update: function(event, ui){
            console.log("ha cambiado la lista")
            }
    })
        
    //DROP
    $("#cajaMovida").draggable()
    $("#area").droppable({
        drop: function(){
            console.log("Has introducido algo en el area")
        }
    })

    //EFECTOS:
    
    //shake, fade, explode, blind, slide, drop, fold, puff, scale...

    
    $("#boton").click(function(){
        $(".efectos").toggle('fade', 1000) //efecto, velocidad en tiempo
    })


})
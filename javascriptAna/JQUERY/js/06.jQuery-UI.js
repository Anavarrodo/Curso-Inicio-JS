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
        $(".efectos").toggle('shake', 1000) //efecto, velocidad en tiempo
    })

    //TOLLTIPS - coge aquellos elementos que posea el atributo title y lo muestra cuando pasamos el raton
    $('document').tooltip()

    //DIALOG
    $("#lanzame").click(function(){
        $("#popup").dialog()
    })
   
    //DATEPICKER - CALENDARIO
    $("#calendario").datepicker()

    //TABS - PESTAÑAS
    $("#pestana").tabs()
    
})
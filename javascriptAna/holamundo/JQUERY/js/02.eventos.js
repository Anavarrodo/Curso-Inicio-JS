
$(document).ready(function(){
    console.log("jQuery Cargado!!")

//PODEMOS CREAR UN STILO LLAMANDO AL ID DE CAJA Y MODIFICARLO DIRECTAMENTE EN EL HTML DE ESTE MODO:
/*
  <style>
    #caja{          //CREAMOS LA CAJA
        width: 250px;
        height: 250px;
        border: 5px solid black;
        background: rosybrown;
        transition: background-color .5s;
    }
    #caja:hover{    //MODIFICAMOS LA CAJA CUANDO PASAMOS EL CURSOS POR ENCIMA DE NUESTRA CAJA
        cursor: pointer;
        background: fuchsia
    }
    </style>
*/
//PERO ES MEJOR HACERLO CON JS DE ESTE MODO

//EVENTOS MOUSEOUT Y MOUSEOVER
    var caja = $("#caja")
/*
    caja.mouseover(function(){
        $(this).css("background", "fuchsia")

    })

    caja.mouseout(function(){
        $(this).css("background", "plum")
    })
*/

//HOVER
    //OTRA FORMA DE HACER LO MISMO QUE ARRIBA ES CON EL EVENTO HOVER

    function cambiarFucsia(){
        $(this).css("background", "fuchsia")
    }

    function cambiarPlum(){
        $(this).css("background", "plum")
    }

    caja.hover(cambiarFucsia, cambiarPlum)

//EVENTO CLICK

    caja.click(function(){
        $(this).css("background" , "indigo")
               .css("color", "lavender")
               .css("font-size", "45px")
    })

//EVENTO DOBLE CLICK

    caja.dblclick(function(){
        $(this).css("background" , "lime")
               .css("color", "darkmagenta")
               .css("font-size", "45px")
    })

//EVENTO FOCUS
    // CREO UN FORMULARIO CON UN CAMPO DE TIPO TEXTO
    //Y CREO UN DIV QUE VA A ESTAR OCULTA 
    var nombre = $("#nombre")
    var datos = $("#datos")
    nombre.focus(function(){
        $(this).css("border", "2px solid limegreen")
    })

//EVENTO BLUR
    //CUANDO PINCHE FUERA AL HABER INTRODUCIDO ALGO EN EL FORMULARIO, ME APARECERÁ LA CAJA CON LA INFORMACION
    nombre.blur(function(){
        $(this).css("border", "2px solid aqua")
        
        datos.text($(this).val()).show() //para mostrar el formulario
        //$(this).val() //para mostrar los datos que escribo en el formulario
        //cuando salga del foco me mostrar lo que tengo escrito en el campo del formulario
    })


//MOUSEDOWN
    datos.mousedown(function(){
        $(this).css("border-color", "pink")
    })

//MOUSUP

    datos.mouseup(function(){
         $(this).css("border-color", "black")
    })


//MOUSEMOVE -captura las coordenadas del raton
//$(document)--> el selector document hace referencia a todo el html
$(document).mousemove(function(){
    //console.log("Coordenadas X: " + event.clientX)
    //console.log("Coordenadas Y: " + event.clientY)
    $('body').css("cursor", "none") //Aquí mi cursos desaparece
    var sigueme = $("#sigueme")
    sigueme.css("left", event.clientX)
           .css("top", event.clientY)
})



})
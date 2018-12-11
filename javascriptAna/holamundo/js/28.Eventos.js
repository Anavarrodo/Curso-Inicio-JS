'use strict'

window.addEventListener('load', function(){

    //EVENTOS
    //Se utiliza para interactuar con todos los elementos que hay en una pagina web

    //EVENTOS RATON
    //CREAR UN RATON EN EL HTML
    /*
    <button id="boton" onclick = "alert()">PRESIONAME</button>
    id identificativo se boton(para poder ser llamado en js a traves de su id con query selector)
    onclick, cada vez que el usuario le di click al boton pasará lo que le indiquemos, en este caso un alert
    o, como aqui, podemos crear una funcion que haga algo cuando presionamos y meter la funcion en el onclick del html
    */

    var boton = document.querySelector("#boton")
    console.log(boton)
    function cambiarColor(){
        var bg = boton.style.background;
        if( bg == "pink"){
            boton.style.background = "white"
        }else{
            boton.style.background = "pink"
        }
    return true;
    }
    cambiarColor()


    //meter codigo js en html es un poco lio, por eso es mejor hacerlo todo dentro de js. Borramos onclick del html
    //para añadir eventos añadimos lo siguiente a la variable: .addEventListener('nombre del evento', fucntion(){}) <-- para que haga 1 click y metemos tambien la funcion 
    //anterior para que la ejecute

    //EVENTO CLICK
    boton.addEventListener('click', function(){
        cambiarColor();
        //SI QUIERO VOLVER A CAMBIAR UN ESTILO DE BOTON, EN LUGAR DE HACER: boton.style.color = "red", hacemos esto.. 
        //utilizamos this. para referirnos al objeto que queremos modificar.
        this.style.border = "10px solid black"
    })

    //MOUSE OVER. cuando pasamos el raton por el boton haz tal
    boton.addEventListener('mouseover', function(){
        boton.style.background = "#ccc"
    })

    //MOUSE OUT - cuando quitamos el raton del boton haz algo
    boton.addEventListener('mouseout', function(){
        boton.style.background = "black"
    })

    //vamos a crear un formulario para los siguientes eventos en el html.
    /*
    crearemos unn formulario del siguiente modo:
    <form>
        <input type ="text" name = "nombre" id = "campoNombre"/>
    </form>
    */

    //FOCUS - cada vez que pinche en el formulario haz tal...
    var input = document.querySelector("#campoNombre")
    input.addEventListener('focus', function(){
        console.log("[focus]Estas dentro del formulario")
    })

    // BLUR - cada vez que pinche fuera del formulario
    input.addEventListener('blur', function(){
        console.log("[blur]Estas fuera del formulario")
    })

    //KEYDOWN - cada vez que pulso una letra dentro del formulario. Para saber qué letra pulso, le añado el parametro event a la funcion y convierto la letra que introducimos
    //en un caracter string de este modo: String.fromCharCode(event.keyCode)
    input.addEventListener('keydown', function(event){
        console.log("[keydown]Estas pulsando una letra", String.fromCharCode(event.keyCode))
    })

    //KEYPRESS
    input.addEventListener('keypress', function(event){
        console.log("[keypress] Tecla presionada", String.fromCharCode(event.keyCode))
    })

    //KEYUPP - cuando suelto la tecla de la letra
    input.addEventListener('keyup', function(event){
        console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode))
    })

})

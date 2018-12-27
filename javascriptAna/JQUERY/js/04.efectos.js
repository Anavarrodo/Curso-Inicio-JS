$(document).ready(function(){
    console.log("jQuery Cargado!!")
    var caja = $("#caja")
//METODO SHOW() PARA MOSTRAR Y HIDE() PARA OCULTAR
    //PODEMOS SUSTITUR SHOW POR FADEIN() Y HIDE POR FADEOUT() PARA CAMBIAR EL EFECTO
        //EN EL () METEMOS LA VELOCIDAD --> fast, normal, slow
    //PODEMOS SUSTUIR LOS METODOS POR FADETO()
        //EN EL ()LE INDICAMOS PRIMERO LA VELOCIDAD Y SEGUNDO LA OPACIDAD
            //LA OPACIDAD VA DE 0 A 1
        //OTROS EFECTOS SON SLIDEUP() PARA OCULTAR Y SLIDEDOWN() PARA MOSTRAR

        $("#mostrar").hide()

        $("#mostrar").click(function(){
            $(this).hide()
            $("#ocultar").show()
            caja.show('slow')
        })

//TAMBIEN PUEDO AÑADIR UN CALLBACK COMO SEGUNDO PARAMETRO PARA QUE POR EJEMPLO, CUANDO OCULTE LA CAJA, ME APAREZCA POR CONSOLA
        $("#ocultar").click(function(){
            $(this).hide()
            $("#mostrar").show()
            caja.hide('slow', function(){
                console.log("caja ocultada")
            })
        })
    
//EL METODO TOGGLE() HACE LOS MISMO QUE LOS DOS METODOS ANTERIORES A LA VEZ.
        //LOS EFECTOS QUE PODEMOS UTILIZAR CON EL TOGGLE CON :
            //FADE, SLIDE, 
        $("#todoenuno").click(function(){
            caja.toggle('fast')
        })

//ANIMACIONES PERSONALIZADAS:
        //METODO ANIMATE({aqui le meto el estilo}, velocidad) --> en forma de json

        $("#animame").click(function(){
            caja.animate({
                           marginLeft: '500px',
                           fontSize: '40px',
                           height: '100px'
                        }, 'slow')
                .animate({
                           borderRadius: '900px',
                           marginTop: '80px',
                        }, 'slow')
                .animate({
                            borderRadius: '0px',
                            marginLeft: '0px',
                         }, 'slow')
                .animate({
                            borderRadius: '100px',
                            marginTop: '0px',
                         }, 'slow')
                .animate({
                            marginLeft: '500px',
                            fontSize: '40px',
                            height: '100px'
                         }, 'slow')

        })


})


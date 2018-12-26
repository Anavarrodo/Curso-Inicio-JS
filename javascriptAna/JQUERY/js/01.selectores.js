/*
COMPROBACION JQUERY CARGADO
El $ es un objeto de jquery. si usamos jQuery en lugar del $ tambien funciona igual
lo que tenemos entre () es nu selector --> document es un selector
ready es un metodo en este caso un evento, y tiene su funcion de callback como cualquier evento y dentro
le metemos lo que queramos que haga
*/
    $(document).ready(function(){
        console.log("jQuery cargado!!")


 // SELECTORES DE ID
    //CREAMOS 3 PARRAFOS EN NUESTRO HTML, CADA UNO CON ID DISTINTO
    //Y LOS PODEMOS SELECCIONAR Y MODIFICAR DEL SIGUIENTE MODO:
    
    $("#rosa").css("background", "pink")
              .css("color", "white")
    $("#salmon").css("background", "lightsalmon")
              .css("color", "white")
    $("#gris").css("background", "gray")
              .css("color", "white")


 // SELECTORES DE CLASES
    //A DIFERENCIA DEL ID, LAS CLASSES SE PONEN EN LA ETIQUETA CUANDO QUEREMOS HACER MODIFICACIONES DE MUCHAS ETIQUETAS
    //LAS ETIQUETAS TENDRAN LA MISMA CLASE PARA QUE TODAS PUEDAN SER MODIFICADAS IGUAL
       
    var miClase = $(".zebra")
    miClase.click(function(){
        console.log("estoy haciendo click")
        $(this).removeClass('zebra')
    })
   
//SELECTOR DE ETIQUETAS
    //CREO UNA ETIQUETA PARRAFO
    var parrafos = $('p')

    parrafos.click(function(){
        var este = $(this)
        $(este).addClass('grande')
        if(este.hasClass('sinBorde')){
            este.addClass('zebra')
        }
    })


//SELECTORES DE ATRIBUTOS
    //CREAMOS EN UN NUESTRO HTML UNA UL Y DENTRO CUATRO LISTAS, CADA UNA DE ELLAS QUE NOS LLEVE A UNA URL DISTINTA
    //LO LLAMAMOS ASI: $('[]')

    $('[title = Google]').css("background", "coral")
                         .css("color", "orangred")
    $('[title = Youtube]').css("background", "darkseagreen")
                         .css("color", "darolivegreen")
    $('[title = Asos]').css("background", "chocolate")
                         .css("color", "maroon")
    $('[title = Fb]').css("background", "darkturquoise")
                         .css("color", "steelblue")



//OTROS SELECTORES
    //QUEREMOS PONERLE TANTO A LOS PARRAFOS COMO A LOS ENLACES UN MARGEN SUPERIOR
    //Y QUEREMOS PONERLE LA MISMA CLASE. ENTONCES CREAMOS UNA CLASE EN EL STYLE DE HEAD
    //p --> parrafo / a--> <a ref>

    $('p, a').addClass('margenSuperior')

//BUSCAR ELEMENTOS  FIND Y PARENT
    //ME CREO UN DIV CON UNA UL Y 2 LI
    //SI QUIERO BUSCAR EL ELEMENTO SUBRAYADO: Y ME INDICA QUE ESTAN EN LA LI Y EN EL SPAN
    var busqueda = $("#caja").find(".subrayado")
    console.log(busqueda)

    //SI QUIERO BUSCAR ALGO QUE ESTE FUERA DE MI DIV CAJA, COMO POR EJEMPLO LAS URL:
    //EL PARENT LO QUE HACE ES SALIR DE LA CAJA QUE ESTOY SELECICONANDO Y BUSCA MAS ARRIBA
    var busqueda2 = $("#caja").parent().find("[title = Google]")
    console.log(busqueda2)
    var busqueda3 = $("#caja").parent().find('a') //me encuentra todos las url
    console.log(busqueda3)
    var busqueda4 = $("#elemento2").parent().parent().parent().find('a') //me encuentra todos las url
    console.log(busqueda4)
    })
$(document).ready(function(){
    console.log("jQuery Cargado!!")

    reloadLink()
    $("#boton")
        .removeAttr('disabled')
        .click(function(){
        if($("#campoLink").val() == 0){
            alert("Escribe bien el enlace")
        }else{
            $("#menu").prepend("<li><a href='" + $("#campoLink").val() + "'><a></li>")
            $("#campoLink").val("")
            reloadLink()
        }
       
    })


})
function reloadLink(indice){
    $('a').each(function(){
        var este = $(this)
        var enlace = este.attr('href') //NOS MUESTRA EL VALOR DEL ATRIBUTO QUE LE HAYAMOS PEDIDO
        este.text(enlace) //NOS MUESTRA POR DOM EL CONTENIDO QUE HAYAMOS PEDIDO
    })
}
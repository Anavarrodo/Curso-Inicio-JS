$(document).ready(function(){
    console.log("jQuery Cargado!!")

    reloadLink()
    $("#boton")
        .removeAttr('disabled')
        .click(function(){
        $("#menu").prepend('<li><a href="' + $("#campoLink").val() + '"></a></li>')
        $("#campoLink").val("") //campo vacio despues de escribir un link
        reloadLink()
    })


})
function reloadLink(indice){
    $('a').each(function(){
        var este = $(this)
        var enlace = este.attr('href') //nos saca el contenido de los href en el atributo a
        este.text(enlace) //nos saca el contenido en el DOM
    })
}
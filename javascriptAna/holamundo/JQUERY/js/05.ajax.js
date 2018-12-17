$(document).ready(function(){

    console.log("jQuery Cargado!!")

    //GET

    $.get("https://reqres.in/api/users", {page: 3}, function(response){
        console.log(response)
        response.data.forEach(element => {
               $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>") 
        });
    })
/*
    var usuario = {
        nombre: "Ana Navarro",
        marido: "Pedro de la Fuente"
    }

    $.post("https://reqres.in/api/users", usuario, function(response){
        console.log(response)
    })
*/
    $("#formulario").submit(function(e){
        e.preventDefault()
        var usuario = {
            name: $('input[name="first_name"]').val(),
            lastName: $('input[name="last_name"]').val()
        }

        console.log(usuario)

        $.post($(this).attr("action"), usuario, function(response){
            console.log(response)
        }).done(function(){
            console.log("Usuario cargado")
        })
    })


})


























/*
//METODO LOAD
    //NOS PERMITE HACER PETICIONES AJAX POR MEDIO GET E INTRODUCIR EL RESULTADO EN UN DIV O EN CUALQUEIR OTRO ELEMENTO

    //$("#datos").load("https://reqres.in")
   
//METODOS GET Y POST
    //VOY A SACAR UNA PG DEL LISTADO DE USUARIOS

        $.get("https://reqres.in/api/users", {page: 3}, function(response){
            response.data.forEach(element => {
                $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>")
            });
        })

    //VOY A CREAR UN USUARIO PARA ENVIARLO
/*
        var usuario = {
            nombre: "Ana Navarro",
            marido: "Pedro de la Fuente"
        }
        
        $.post("https://reqres.in/api/users", usuario, function(response){
            console.log(response)
        })
        */

//HE CREADO UN FORMULARIO PARA QUE LA INTRODUCIR LOS DATOS ME LOS AÑADA A LA URL QUE LE INDICADO EN EL ACTION DEL FORM
/*
$("#formulario").submit(function(e){
    e.preventDefault()
     
     console.log("e: " + e)
     var usuario = {
         first_name: $('input[name = "first_name"]').val(),
         last_name: $('input[name = "last_name]').val()
     }
     console.log(usuario)

     $.post($(this).attr('action'), usuario, function(response){
         console.log(response)
     }).done(function(){
         alert("Datos recogidos")
     })
     return false;
 })


*/
$(document).ready(function(){

    console.log("jQuery Cargado!!")

//METODO LOAD
    //NOS PERMITE HACER PETICIONES AJAX POR MEDIO GET E INTRODUCIR EL RESULTADO EN UN DIV O EN CUALQUEIR OTRO ELEMENTO
    //LOAD 
    //NOS MUESTRA POR DIV LA WEB QUE LE DIGAMOS 
    //$("#datos").load("https://reqres.in")

    //GET

    $.get('https://reqres.in/api/users', {page: 4}, function(response){
        console.log(response)

        response.data.forEach(element => {
            $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>")
        });
    })

        var usuario = {
            nombre: "Ana",
            apellido: "Navarro"
        }

    $.post('https://reqres.in/api/users', usuario, function(response){
        console.log(response)
    })

    $("#formulario").submit(function(e){
        e.preventDefault()
            var usuario = {
                nombre: $('input[name="first_name"]').val(),
                apellido: $('input[name="last_name"]').val(),
            }
        
            $.post($(this).attr('action'), usuario, function(response){
                console.log(response)
            }).done(function(){
                console.log("Usuario Cargado")
            })

            $.ajax({
                type: 'POST',
                url: $(this).attr('action'),
                data:usuario,
                beforeSend: function(){
                    console.log("Enviando datos...")
                },
                success: function(response){
                    console.log(response)
                },
                error: function(){
                    console.log("Ha ocurrido un error")
                },
                timeout: 2000
            })

    })
      

})



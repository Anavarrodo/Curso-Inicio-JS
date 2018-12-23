$(document).ready(function(){
    console.log("cargado")

    /* SLIDER */
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
      });

    /* POSTS */
  
    var posts = [
        {
            title: "Los zapateros",
            date: "Publicado el " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus faucibus laoreet. Donec nisi erat, molestie eleifend consectetur sit amet, dignissim eu nulla. Nunc imperdiet volutpat ultrices. Cras pretium dolor nec augue ornare condimentum. Nam pretium fermentum elit non ullamcorper. Nulla at facilisis purus, nec vehicula eros. Etiam ullamcorper bibendum libero, a molestie lacus.
            `
        },
        {
            title: "Los mugrientos",
            date: "Publicado el " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus faucibus laoreet. Donec nisi erat, molestie eleifend consectetur sit amet, dignissim eu nulla. Nunc imperdiet volutpat ultrices. Cras pretium dolor nec augue ornare condimentum. Nam pretium fermentum elit non ullamcorper. Nulla at facilisis purus, nec vehicula eros. Etiam ullamcorper bibendum libero, a molestie lacus.
            `  
        },
        {
            title: "Los asquerosos",
            date: "Publicado el " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus faucibus laoreet. Donec nisi erat, molestie eleifend consectetur sit amet, dignissim eu nulla. Nunc imperdiet volutpat ultrices. Cras pretium dolor nec augue ornare condimentum. Nam pretium fermentum elit non ullamcorper. Nulla at facilisis purus, nec vehicula eros. Etiam ullamcorper bibendum libero, a molestie lacus.
            `
        }
    ]
    console.log(posts)

    posts.forEach(element => {
        var post = `
        <article class="post">
            <h2>${element.title}</h2>
            <span class="date">${element.date}</span>
            <p>${element.content}</p>
            <a href="#" class="leerMas">Leer más</a>
        </article>
        `
        $("#posts").append(post)
    });


    //CAMBIADOR DE TEMA

    var theme = $("#theme")

    $("#to-principal").click(function(){
        theme.attr("href", "css/principal.css")
    })
    $("#to-rosa").click(function(){
        theme.attr("href", "css/rosa.css")
    })
    $("#to-azul").click(function(){
        theme.attr("href", "css/azul.css")
    })

    //BOTON IR ARRIBA

    $("#subir").click(function(){
        $("html body").animate({
            scrollTop: 0
        }, 100)
    })

    //FORMULARIO CON USUARIO FALSO Y CERRAR SESION

    $("#login").submit(function(){
        var form_name = $("#form_name").val()
        localStorage.setItem("Usuario", form_name)  
    })

        var form_name = localStorage.getItem("Usuario")
        if(form_name != null && form_name != "undefined"){
            var about_p = $("#about p")
            about_p.html("Bienvenido, " + form_name)
            about_p.append("<a href='#' id='logout'>Cerrar sesión</a>")

            $("#login").hide()

            $("#logout").click(function(){
                localStorage.clear()
                location.reload()
            })
        }
       
    
    //SECCION SOBRE MI - ACORDEON
    if(window.location.href.indexOf("sobreMi") > -1){
        $("#acordeon").accordion()
    }
   

    //RELOJ
    if(window.location.href.indexOf("reloj") > -1){
        setInterval(function(){
            var reloj = moment().format("HH:mm:ss");
            $("#reloj").html(reloj)
        })
     
    }

    $("form input[name='date']").datepicker({
        dateFormat: 'dd/mm/yy'
    })
    


    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        srollToTopOnError: true,
      });
})

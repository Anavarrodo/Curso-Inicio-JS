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
            title: "El rey de la selva",
            date: "Publicado el " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: `
                    Había una vez una selva en la que gobernaba un león tirano y avaricioso que tenía sometidos a todos los animales. Ni siquiera sus consejeros y ministros leones estaban de acuerdo con él, pero por temor a su ira obedecían y hacían cumplir las normas y los castigos.

                    Las normas del rey león eran tan estrictas que a los animales ni siquiera se les permitía abandonar la selva. El castigo por intentar fugarse era terrible. Los que eran capturados intentando huir eran encerrados y azotados. Su familia y sus amigos corrían la misma suerte.

                    El rey león cada vez era más tirano y cruel. Pero no había en la selva animal capaz de imponerse a su poder. Su fama se había extendido a todo el mundo animal. Pero nadie tenía valor para ir a derrocar al tirano.

                    Pero todo cambió el día que un nuevo animal llegó a la selva. Se trataba de un majestuoso y elegante tigre que había huido de un zoo y que no había oído nada de lo que pasaba en esa selva.

                    Cuando el tigre llegó fue a ver al rey león a presentarse y a contarle su historia para pedirle asilo. El rey león, al verlo tan majestuoso y joven, pensó que sería un buen aliado para seguir sometiendo a sus súbditos. 

            `
        },
        {
            title: "El misterio de las castañas",
            date: "Publicado el " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: `
                A Julio le encantaban las castañas. Eran sus frutos secos favoritos. Le gustaba comerlas crudas, asadas, cocidas, confitadas o en almíbar. De todas las formas posibles. De hecho, si le dejasen, las comería a todas horas. Cada año, Julio esperaba impaciente la época de las castañas. 

                Desde octubre y hasta mediados de diciembre, muchos fines de semana iba con sus primos al bosque a coger bolsas y bolsas que después repartía entre los vecinos. Muchas veces en su casa las usaban para preparar mermelada o crema para rellenar las tartas. 

                A veces montaba un pequeño puesto en la entrada de su casa y vendía cucuruchos de castañas asadas a las personas que pasaban por la calle. Como las vendía muy baratas casi todo el mundo le compraba y enseguida tenía que ir a casa a asar más. Le encantaba pasar las tardes así, disfrutando del olor de las castañas al salir del horno y charlando con la gente que se detenía en su pequeño puesto callejero. 
            `
        }
      ]
      
      posts.forEach(element => {
            var post = `
            <article class="post">
            <h2>${element.title}</h2>
            <span class="date">${element.date}</span>
            <p>
                ${element.content}
            </p>
            <a href="#" class="leerMas">Leer más</a>
            <br/>
        </article>
            `
            console.log(post)
            $("#posts").append(post)
      });

      //CAMBIADOR DE TEMAS

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

    // SUBIR ARRIBA
    $("#subir").click(function(){
        $("body, html").animate({
            scrollTop: 0
        }, 500)
    })

    //IDENTIFICACION CON LOCALSTORAGE

    
    $("#login").submit(function(){
        var form_name = $("#form_name").val()
        localStorage.setItem("dato usuario", form_name)
    })

    var form_name = localStorage.getItem("dato usuario")
    if(form_name != null && form_name != "undefined"){
        var about_p = $("#about p")
        about_p.html("Bienvenido, " + form_name)
        $("#login").hide()
        about_p.append("<a href='#' id='logout'>Cerrar sesión<a>")
        $("#logout").click(function(){
            localStorage.clear()
            location.reload()
        })

    }

    $("#acordeon").accordion()
    
})
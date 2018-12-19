$(document).ready(function(){
    console.log("Cargado")
    //HACER ESTO --> if(window.location.href.indexOf('index') > -1){METE EL JS} CUANDO NO NOS CARGUEN LOS JS EN OTRO HTML


//  SLIDER
    if(window.location.href.indexOf('index') > -1){
          $('.bxslider').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            responsive: true,

          });
    }


// POSTS
    if(window.location.href.indexOf('index') > -1){
        var posts = [
          {
            title: "Maquillaje de fiesta!",
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: `El tutorial que les traemos hoy nos ha salvado muchas veces! Este paso a paso es para esos días después de una buena fiesta, que por lo general nuestra piel sufre un poco a causa del trasnocho y del alcohol y nos podemos ver un poco cansadas y deterioradas.
            Primero, les queremos dar unas recomendaciones generales para el día de la fiesta. Como ya sabemos el alcohol nos deshidrata y esta deshidratación se ve reflejada en nuestra piel, lo más importante aquí es HIDRATARNOS, por cada vaso de alcohol vamos a tomar uno de agua. Al llegar a casa es muy importante desmaquillarnos y aunque este paso da un poco de pereza es de los más importantes, nuestra recomendación es tener siempre un paquete de toallitas desmaquillantes en la mesita de noche, no hay excusas! Y por último no olvidemos nuestro BEAUTY SLEEP! 
            Ahora vamos con los tips para el día siguiente.
            1. Tenemos que lavar muy bien la cara para deshacernos de cualquier exceso de maquillaje del día anterior, para esto vamos a usar el gel purificante limpiador de Vichy que ayuda a que la piel se vea mucho más saludable que es lo que queremos.
            2. Este paso es opcional pero de verdad que hace un gran cambio, vamos a usar una mascarilla hidratante, nuestra favorita es esta de Genomask, que contiene vitamina C y ácido hialurónico. Vamos a aplicarla en la cara y el cuello, dejamos que se seque por 20 minutos y retiramos del cuello hacia arriba. Es buenísima, deja la piel con un glow especial. 
            3. Ahora para el maquillaje vamos a olvidarnos de los polvos, ya que estos hacen que nuestra piel se vea aún más reseca. Un muy buen tip es mezclar partes iguales de base y crema hidratante facial, esto nos va a ayudar a que la base se absorba mucho mejor y nos dejará la piel radiante. Y terminamos con nuestro maquillaje normal arcordándonos siempre de usar en lo posible maquillaje líquido o en crema.
            `
        },
        {
          title: "Desmaquillate!!",
          date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
          content: `Uno de los requisitos para mantener un lindo maquillaje es tener un buen cuidado de la piel y para eso hay que desmaquillarse. Todas las noches tu piel te agradecerá que limpies todos los excesos del día, así te sentirás más relajada y lista para descansar.
          Al desmaquillarnos dejamos que la piel respire y se limpie de la polución, los componentes del maquillaje y excesos de grasa que acumulamos a lo largo del día; sí no lo hacemos nuestra piel esta más propensa a sufrir de esos incomodos granos, espinillas y puntos negros. Evítalos!
          Tienes que tener en cuenta al desmaquillarte separar las zonas. Los ojos, los labios y el rostro tienen que hacerse por separado para evitar que se unan los colores y así no te manchas toda la cara.
          1. Empieza desmaquillándote los ojos: En un pomo de algodón, aplicamos desmaquillante (preferiblemente un producto especial para ojos). Lo dejamos unos segundos para que ayude a soltar el maquillaje y con movimientos circulares empieza a retirarlo, al final frota las pestañas de arriba abajo para quitar lo que queda de producto.                        
          2. Limpia los labios: Con tus dedos, aplica desmaquillante en los labios, deja actuar unos segundos y procede a eliminar con un pomo, algodón, o toalla de papel.                        
          3. Tu rostro: Al ser el área más grande necesitaremos realizar este paso dos veces para tener una limpieza más profunda. Aplica en un pomo desmaquillante y frótalo por todo el rostro eliminando el exceso de base, polvos y rubor.
          `
        },
        {
          title: "Look: Ojs con color y labio definido!!",
          date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
          content: `La semana pasada tuve la suerte de trabajar de nuevo en London Fashion Week y escogí este look para la ocasión. Al subir la foto fueron tantas las peticiones que al día siguiente tuve que grabarlo con urgencia. Ya sabéis, las urgencias del primer mundo.
          En esta ocasión combino un punto de color en el ojo, en línea de pestañas inferiores, con un labio oscuro y definido. Se que no estáis acostumbradas a verme con colores ya que normalmente opto por looks neutros pero cuando me apetece darle un punto diferente y utilizar algún color llamativo, normalmente me ayudo de la línea de agua y línea inferior de las pestañas (por mi tipo de párpado una sombra de color llamativo en todo el móvil no me favorece). 
          `
        },
        {
          title: "Ahumado de larga duración!!",
          date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
          content: `¡Buenos días! Hoy publico este post desde el hotel en Madrid. Este fin de semana empecé Makeup Experience 2017 y aunque fueron trece horas diarias de darlo todo y creía que hoy me levantaría agotada, resulta que no, que no he esperado a que sonara el despertador siquiera para correr a publicar este vídeo.
          En estos dos días me he dado cuenta de la cantidad de gente a la que ayudo con lo que hago, no era consciente, porque aunque siempre recibo comentarios bonitos y los agradezco en el alma, nunca había experimentado que dieciséis personas vengan con cara de niñas el día de Reyes a verte y te digan que les estás cambiando la forma en la que ven el maquillaje. De corazón, gracias.  
          `
        },
      ]
    
        posts.forEach((element, index) => {
            var post = `
    
            <article class="post">
            <h2>${element.title}</h2>
            <span class="date">${element.date}</span>
            <p>
                ${element.content}
            </p>
            <a href="#" class="button-more">Leer más</a>
        </article>
          `
            console.log(post)
    
            $("#posts").append(post)
        });
    }
    

    // SELECTOR DE TEMA

    var theme = $("#theme")

    $("#to-arena").click(function(){
      theme.attr("href", "css/arena.css")
    })

    $("#to-blanco").click(function(){
      theme.attr("href", "css/blanco.css")
    })
    $("#to-rosa").click(function(){
      theme.attr("href", "css/rosa.css")
    })

    // SCROLL SUBIR ARRIBA

      $(".subir").click(function(e){
        e.preventDefault()
        $('body, html').animate({
          scrollTop: 0
        }, 1000)
        return false;
      })

      //MOSTRAR LOGIN POR LOCALSTORAGE

      $("#login form").submit(function(){
        var form_name = $("#form_name").val()
        localStorage.setItem("form_name", form_name)
      })


      //MOSTRAR SESION EN NUESTRA WEB

      var form_name = localStorage.getItem("form_name")
   
      if(form_name != null && form_name != undefined){
        var about_h4 = $("#about h4")
        about_h4.html("Bienvenido, " + form_name)
        $("#login").hide()

      about_h4.append('<br><a href="#" id="logout">Cerrar sesión</a>')
      $("#logout").click(function(){
        localStorage.clear()
        location.reload()
      })
      }

  //ACORDEON
  if(window.location.href.indexOf('sobreMi') > -1){
      $("#acordeon").accordion()

  }

//RELOJ
if(window.location.href.indexOf('reloj') > -1){
  
  setInterval(function(){
      var reloj = moment().format("hh: mm: ss")
      $("#reloj").html(reloj)
  }, 1000)
  
}

//VALIDACION FORMULARIO

if(window.location.href.indexOf('contacto') > -1){

  $('form input[name="fechaNacimiento"]').datepicker({
    dateFormat: 'dd/mm/yy'
  })

    $.validate({
      lang: 'es',
      errorMessagePosition: 'top',
      scrollToTopOnError: true,
    });

}
});
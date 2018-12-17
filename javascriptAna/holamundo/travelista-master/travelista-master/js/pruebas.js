
//AÑADIMOS SUBMIT PARA QUE PODAMOS ENVIAR EL FORMULARIO
var formulario = document.querySelector("#Registro")

 formulario.addEventListener('submit', function(){
    console.log("submit")

var nombre = document.querySelector("#name").value
var destino = document.querySelector("#to").value
var salida = document.querySelector("#start").value
var telefono = document.querySelector("#tel").value

console.log("Nombre--->"+ nombre)
console.log("Apellido-->"+destino)
console.log("Email--->"+salida)
console.log("Telefono--->"+telefono)

})

'use scrict'

//PLANTILLAS DE TEXTO

var nombre = prompt("Introduce tu nombre")
var apellidos = prompt("Introduce tus apellidos")
//una plantilla: se mete el texto a pintar dentro de comillas invertidas y llamamos a las variables con ${}
var texto = `
    <h1>HOLA A TODOS MIS FANS</h1>
    <h3>Me llamo ${nombre}</h3>
    <h3>de apellido ${apellidos}</h3>`

document.write(texto)
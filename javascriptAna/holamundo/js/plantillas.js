'use strict'

//PLANTILLAS DE TEXTO

var nombre = prompt("INTRODUCE TU NOMBRE");
var apellidos = prompt("INTRODUCE TUS APELLIDOS")

/*ESTA ES LA FORMA MAS COMUN, CONCATENANDO
var texto = "Mi nombre es: " + nombre + "<br/> Mis apellidos son: " + apellidos;
document.write(texto);
*/
//OTRO MODO DE HACERLO ES CON LA CREACION DE PLANTILLAS con comillas invertidas `y para meter la variable ${}

var texto = `
    <h1> Hola a todos, voy a presentarme</h1>
    <h3> Mi nombre es: ${nombre}</h3>
    <h3> Mis apellidos son: ${apellidos}<h3>
`;
document.write(texto);

'use strict'

//Comprobar si tenemos disponible LocalStorage
if(typeof(Storage) !== undefined){
    console.log("El localStorage está disponible!!")
}
//Guardar datos
localStorage.setItem("usuario", "Ana Navarro estudiando")
//Recuperar el elemento
console.log(localStorage.getItem("usuario"))
    //document.querySelector("#peliculas").innerHTML = localStorage.getItem("usuario")
document.querySelector("#peliculas").append(localStorage.getItem("usuario"))
//Guardar un objeto
var anaEsAsi = {
    nombre: "Ana Navarro",
    colorDePelo: "En proceso a rubia",
    estadoCivil: "casada",
    marido: "Pedro de la Fuente"
}



//para guardar objetod al localStorage, necesitamos convertir el objeto en un string
localStorage.setItem("Datos Ana", JSON.stringify(anaEsAsi))
//Para recuperar el objeto tengo que convertirlo en un objeto JSON usable, no me sirve un JSON string
var anita = JSON.parse(localStorage.getItem("Datos Ana"))
document.querySelector("#usuario").append(anita.nombre + " - " + anita.estadoCivil + " - " + anita.marido)
//como borrar un clave valor en el localStorage
localStorage.removeItem("Datos Ana")
//para borar todas las clave valor del localStorage:
localStorage.clear()
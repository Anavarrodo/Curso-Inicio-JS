'use strict'

//FOREACH
//BUCLE PARA RECORRER UN ARRAY

var animales = ["perro", "gato", "loro", "camello", "caballo", "gorrión", "peces", 52, true, false]

animales.forEach((elemento, indice) => {
    document.write("<li>" + indice + " - " + elemento + "</li>")
});
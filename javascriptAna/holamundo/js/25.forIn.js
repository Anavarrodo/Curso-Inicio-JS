'use strict'

//FOR IN
//OTRA FORMA DE RECORRER UN ARRAY

var lenguajes = ["Python", "Java", "Go", "PHP", "JS"]
for(var indice in lenguajes){
    document.write("<li>" + lenguajes[indice] +"</li>")
}
function numeroDelMesPorMes(mes){
    console.log("la valor de mi array es " + mes)
    var resultado = meses.indexOf(mes) + 1
    console.log("el indice de mi es array es: " + resultado)
    return resultado;
}


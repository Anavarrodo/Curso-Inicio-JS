'use strict'

//CREAR RECETARIO CUANDO TE LO PIDAN

var salsaYogur = ["yogur", "zumo de limón", "aceite de oliva", "perejil", "sal y pimienta"]
var salsaVerde = ["aceite de oliva", "cucharadita de harina", "2 ajos", "perejil", "vino blanco", "sal y pimienta"]
var salsaCocktel = ["huevo", "mostaza", "zumo naranja", "whisky", "salsa picante", "salsa ingles", "ketchup", "aceite de oliva"]
var salsaPimienta = ["mantequilla", "pimienta en grano", "pimienta molida", "coñac", "nata", "caldo de carne"]
var salsaCarbonara = ["nata", "queso rallado", "bacon", "cebolla", "aceite de oliva", "sal y pimienta"]

var todasLasSalsas = [salsaYogur, salsaVerde, salsaCocktel, salsaPimienta, salsaCarbonara]

var pedirEntrada = prompt("Que receta quieres saber? (yogur, verde, cocktel, pimienta o carbonara)")
var resultado = recuperarSalsaPorNombre(pedirEntrada)
//console.log("resultado es " +resultado)
document.write("<h3>RECETA DE " + pedirEntrada.toUpperCase() + " :</h3>")


resultado.forEach(element => {
    document.write("<li>" + element + "</li>")
});

function recuperarSalsaPorNombre(salsa){

        switch(salsa){
            case "yogur":
            console.log("la receta de salsa de yogur es: " + salsaYogur)
            return salsaYogur
            break;
            case "verde":
            console.log("la receta de salsa de yogur es: " + salsaVerde)
            return salsaVerde
            break;
            case "cocktel":
            console.log("la receta de salsa de yogur es: " + salsaCocktel)
            return salsaCocktel
            break;
            case "pimienta":
            console.log("la receta de salsa de yogur es: " + salsaPimienta)
            return salsaPimienta
            break;
            case "carbonara":
            console.log("la receta de salsa de yogur es: " + salsaCarbonara)
            return salsaCarbonara
            break;
        }
}
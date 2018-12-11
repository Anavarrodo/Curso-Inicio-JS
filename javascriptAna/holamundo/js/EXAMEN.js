'use strict'

//1. un array con 6 nombres de personas. recorrer cada uno de los elementos y sacar en el cuerpo cuantas vocales tiene cada uno y cuales son(3)2.5
var nombres = ["stefan", "boni", "carolina", "klaus", "elena", "damon"]
document.write("<h3>NOMBRES DE MI ARRAY</h3>")
//recorrer array
nombres.forEach(element => {
    document.write("<li>"+ element + " tienen " + numeroDevocalesPorPalabra(element) + " vocales y son estas "+vocalesPorPalabra(element)+"</li><br/>")
});


//2. dado un array de recetas de cocina crear otro array dentro de cada una de las posiciones con los ingredientes. y pintarlo en el cuerpo(2) 2
var alexander = ["3cl de coñac", "3cl crema de cacao", "3cl nata liquida"]
var americano = ["3cl campari", "3cl vermut rojo", "soda"]
var b52 = ["2cl licor de cafe", "2cl bayleis", "2cl grand marnier"]
var bloodyMary = ["4.5cl vozdka", "9cl zumo de tomate", "1.5cl zumo de limon", "2 o 3 toques de salsa Worcestershire", "tabasco, sal de apio y pimienta"]
var caipirinha = ["5cl cachaca", "media lima fresca cortada en 4 trozos", "2 cucharas de azucar", "lima y azucar"]

var cocteles = [alexander, americano, b52, bloodyMary, caipirinha]

var entrada = prompt("Introduce el coctel que quieras conocer")
var resultado = saberIngredientesPorReceta(entrada)
document.write("<h3>INGREDIENTES PARA HACER : " + entrada.toUpperCase() + "</h3>")
resultado.forEach(element => {
    document.write("<li>" + element + "</li>")
});

function saberIngredientesPorReceta(receta){
    switch(receta){
        case "alexander":
        return alexander
        break;
        case "americano":
        return americano
        break;
        case "b52":
        return b52
        break;
        case "bloodymary":
        return bloodyMary
        break;
        case "caipirinha":
        return caipirinha
        break;
    }
    return resultado;
}

//3. calcular y sacar por el cuerpo los numeros fibonacci entre 1-100(3) 0
var numeros = new Array (100)
for(var i = 0; i < 100; i++){
    numeros[i] = i
}
console.log(numeros)

numeros.forEach(element => {
    if(esFibonacci(element)){
        console.log("el numero fibonacci es: " + element)
    }
    })
    

function esFibonacci(entrada){
    console.log("Analizando--> "+entrada)
    var numero1 = 0;
    var numero2 = 1;
    var numero3 =0;
    for(var i = 0; i <= entrada; i++){
        if(entrada == numero3){
            console.log (" el numero -> "+entrada+" Es fibonacci")
            return true;
        }
        if(numero3<=entrada){
            numero3 = numero1 + numero2
        numero1 = numero2
        numero2 = numero3
        
        }
        
    }
    console.log (" el numero -> "+entrada+" No Es fibonacci")
    return false;
    
}

//4. crea una funcion que devuelva un array con el numero de vocales que tiene un string. (1)1
function numeroDevocalesPorPalabra(palabra){    
    //console.log(palabra.split(""))
    var contador = 0;
    for(var i = 0; i <= palabra.length; i++){
        //console.log(palabra[i])
       if(esVocal(palabra[i])){
           //console.log("contiene vocal")
           contador++
       }
    }
    console.log("La palabra " + palabra + " contiene " + contador + " vocales")
    return contador;
}

function vocalesPorPalabra(palabra){    
    //console.log(palabra.split(""))
    var array = [];
    
    for(var i = 0; i <= palabra.length; i++){
        //console.log(palabra[i])
       if(esVocal(palabra[i])){
           //console.log("contiene vocal")
           array.push(palabra[i])
       }
    }
    console.log("La palabra " + palabra + " contiene estas " + array + " vocales")
    return array;
}
 
//5. crear una funcion que devuelva true o false si una letra es vocal.(1)1
function esVocal(letra){
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        //console.log("la letra " + letra + " es vocal")
        return true
    }else{
        //console.log("la letra " + letra + " es consonante")
        return false
    }
}

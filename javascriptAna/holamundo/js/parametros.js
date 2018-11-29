'use strict'

//PARAMETROS. lo que está entre parentesis dentro de la funcion(numero1,numero2)
/*
function calculadora(numero1, numero2){
    console.log("Suma de " + (numero1+numero2))
    console.log("Resta de " + (numero1-numero2))
    console.log("Multiplicacion de " + (numero1*numero2))
    console.log("Division de " + (numero1/numero2))
}

for(var i = 1; i <= 10; i++){
    calculadora(i, 10);
}
*/
//PARAMETROS OPCIONALES. para ponerle un condicion por ejemplo y ya estan inicializados en la propia funcion
/*
function calculadora (numero1, numero2, mostrar = false){

    if(mostrar == false){
        console.log("Suma de " + (numero1+numero2))
        console.log("Resta de " + (numero1-numero2))
        console.log("Multiplicacion de " + (numero1*numero2))
        console.log("Division de " + (numero1/numero2))
    }else{
        document.write("Suma de " + (numero1+numero2) + "<br/>")
        document.write("Resta de " + (numero1-numero2) + "<br/>")
        document.write("Multiplicacion de " + (numero1*numero2) + "<br/>")
        document.write("Division de " + (numero1/numero2) + "<br/>")

    }
    
}
calculadora(5, 6);
calculadora(10, 8, true);
*/
//FUNCIONES DENTRO DE FUNCIONES. Otra manera de hacerlo

function porConsola (numero1, numero2){
    console.log("Suma de " + (numero1+numero2))
    console.log("Resta de " + (numero1-numero2))
    console.log("Multiplicacion de " + (numero1*numero2))
    console.log("Division de " + (numero1/numero2))
}
function porPantalla (numero1, numero2){
    document.write("Suma de " + (numero1+numero2) + "<br/>")
    document.write("Resta de " + (numero1-numero2) + "<br/>")
    document.write("Multiplicacion de " + (numero1*numero2) + "<br/>")
    document.write("Division de " + (numero1/numero2) + "<br/>")
}
function calculadora (numero1, numero2, mostrar = false){
    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
    
}
calculadora(5, 6, false);
calculadora(8, 10, true);
calculadora(20, 6,);
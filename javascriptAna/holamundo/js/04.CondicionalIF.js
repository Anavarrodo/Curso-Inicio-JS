'use strict'

//CONDICIONAL IF.
//Es una estructura de control que nos permite controlar algo
/*
if(condicion){
    Haz algo.
}else{
    y si no, ejecutame esto.
}
*/

var edad = 18;
var mayorDeEdad = Number(prompt("Qué edad tienes?"))

//OPERADORES RELACIONALES:
/*
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=
*/

if(mayorDeEdad >= edad){
    console.log("Genial, tienes " + mayorDeEdad + " ,ya puedes conducir!!")
    if(mayorDeEdad <= 30){
        console.log("Tienes " + mayorDeEdad + " años. Aún eres joven")
    }else if(mayorDeEdad <= 50){
        console.log("Tienes " + mayorDeEdad + " años. Ya eres viejales")
    }else{
        console.log("Tienes " + mayorDeEdad + " años. Estás en las últimas")
    }
}else{
    console.log("Espera a tener " + edad + " años.")
}



//OPERADORES LOGICOS.
/*
AND: &&
OR: ||
NEGACION: !
*/

var year = 2018
//NEGACION

if(year != 2016){
    console.log("El año no es 2016. Realmente es " + year)
}

//AND
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual.")
}else{
    console.log("Estamos en la era postmoderna")
}

// OR
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8")
}else{
    console.log("AÑO NO REGISTRADO ")
}
'use strict'

//condicional IF
//son unas instrucciones que nos van a permitir comprobar algo
//si A es igual a B haz algo o haz otra cosa o no hagas nada (o es mayor, es menor, es diferente..)

/* 
Operadores relacionales:
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distintos: !=
*/

/*var edad1 = 10
var edad2 = 12
//si pasa esto
if(edad1 > edad2){
//ejecuta esto
console.log("edad uno es mayor que edad dos")
}else{
    console.log("la edad uno es inferior a la edad dos")
}*/

var edad = 52
var nombre = "Ana Navarro"

if(edad >= 18){
console.log(nombre + " tiene " + edad + " años, es mayor de edad")
if(edad == 20){
    console.log(nombre + " estas estupenda")
}else if(edad <= 25){
console.log( nombre + " estas pasadita")
}else{
    console.log(nombre + " estas hecha un asquito")
}
}else{
console.log(nombre + " tiene " + edad + " años, es menor de edad")
}

/*
//Operadores logicos (se utiliza para poner varias condiciones para que se de)
AND (Y): &&
OR (O): ||
Negacion: !
*/
var year = 2018

//Negacion
if(year != 2018){
console.log("no estamos en la epoca actual")
}else{
    console.log("estamos en la epoca actual")
}

//and (&&) se tienen que cumplir las dos condiciones obligatoriamente
if(year >= 2000 && year <= 2015){
console.log("estamos en el año que debemos estar")
}else{
    console.log("el año introducido es incorrecto")
}

//or (||) o una cosa u otra. también se pueden concatenar condiciones
if(year == 1988 || (year >=2000 && year <=2020)){
console.log("estas viviendo el presente")
}else{
    console.log("estas en un sueño del pasado")
}
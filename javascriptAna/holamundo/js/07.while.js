'use strict'

//BUCLE WHILE
/*
ESTRUCTURA:
while(condicion){
    Haz esto
}
*/

var años = 2018;

while(años != 1991){
    console.log("Estamos en el año " + años)
    if(años == 2000){
        break;
        //Ponemos break para parar un bucle
    }

    años--; 
}

var edad = 50;

while(edad <= 70){
    console.log("Tengo " + edad + " años")
    edad++;
}

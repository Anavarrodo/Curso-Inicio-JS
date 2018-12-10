'use sttrict'

//BUCLE DO WHILE
/*
ESTRUCTURA:
do{
    Haz esto
}while(mientras se cumpla esta conducion)
*/

var edad = 30;

do {
    console.log("En cada iteración tengo un año más: " + edad + " hasta llegar a mi condición" )
    edad++
} while (edad < 40);

var horasEstudio = 8;
do {
    console.log("Ahora estudio menos horas" + horasEstudio)
    horasEstudio--
} while (horasEstudio > 3);
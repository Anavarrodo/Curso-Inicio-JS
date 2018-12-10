'use strict'

//Ejercicio 1 --> Pide la edad y si es mayor de 18 años indica que ya puede conducir.

/*
var edad = parseInt(prompt("Que edad tienes??"))

if(edad > 18){
    console.log("Ya eres mayor de edad, tienes " + edad + "  años. Puedes conducir.")
}else{
    console.log("Aún no puedes conducir, tienes " + edad + " años ")
}
*/

var edad = prompt("Qué edad tienes?")

if(edad >= 18){
    console.log("Eres mayor de edad, por que tienes " + edad + " años. Ya puedes conducir")
}else{
    console.log("Aún no puedes conducir. solo tienes " + edad + " años ");
}


//Ejercicio 2 --> 2. Pide una nota (número). Muestra la calificación según la nota:
/*
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
*/


var nota = parseInt(prompt("Qué nota has sacado en el examen??"))

    if(nota < 3){
        console.log("Muy deficiente")
    }else if(nota >= 3 && nota < 5){
        console.log("Insuficiente")
    }else if(nota >= 5 && nota < 6){
        console.log("Suficiente")
    }else if(nota >= 6 && nota < 7){
        console.log("Bien")
    }else if(nota >= 7 && nota < 9){
        console.log("Notable")
    }else if(nota >= 9 && nota <= 10){
        console.log("Sobresaliente")
    }else{
        console.log("Introduce una nota válida")
    }
    

/*
var nota = parseInt(prompt("Que nota has sacado en el examen??"));
var calificacion = ["Muy deficiente", "Insuficiente", "Suficiente", "Bien", "Notable", "Aobresaliente"];
console.log(calificacion.length);
if(nota >= 0 && nota <=2,9){
    console.log("Tienes una calificación " + calificacion[0])
}else if(nota >= 3 && nota <= 4,9){
    console.log("Tienes una calificación " + calificacion[1])
}else if(nota >= 5 && nota <= 5,9){
    console.log("Tienes una calificación " + calificacion[2])
}else if(nota >= 6 && nota <= 6,9){
    console.log("Tienes una calificación " + calificacion[3])
}else if(nota >= 7 && nota <= 8,9){
    console.log("Tienes una calificación " + calificacion[4])
}else if(nota >= 9 && nota <= 10){
    console.log("Tienes una calificación " + calificacion[5])
}
*/

// Ejercicio 3 --> 3. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
//Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

var resultado = "";
do{
var texto = prompt("Introduce lo que se te venga a la mente")
if(resultado == ""){
    resultado = resultado + texto
}else{
    resultado = resultado + " - " + texto
}
}while(confirm("Desea continuar?"))
console.log(resultado)

// Ejercicio 4 --> 4. Realiza un script que pida números hasta que se pulse “cancelar”. 
//Si no es un número deberá indicarse con un “alert” y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 
var suma = 0;
do{
var numeros = prompt("Introduce números al azar")
if(Number(numeros) == numeros){
    numeros = Number(numeros)
    suma = suma + numeros
}else{
    if(numeros != undefined){
        alert(numeros + " No es un número")
    }
}
}while(numeros != undefined)
console.log(suma);

//Ejercicio 5 --> 5. Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad).
/*
El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse “cancelar”.
*/

var resto;
var letra;

do{
    var numero = prompt("Introduce los dígitos de tu DNI")
    if(Number(numero) == numero){
        numero = Number(numero);
        if(numero >= 0 && numero <= 99999999){
            resto = numero%23;
            switch(resto){
                case 0:
                letra = "T";
                break;
            case 1:
                letra = "R";
                break;
            case 2:
                letra = "W";
                break;
            case 3:
                letra = "A";
                break;
            case 4:
                letra = "G";
                break;
            case 5:
                letra = "M";
                break;
            case 6:
                letra = "Y";
                break;
            case 7:
                letra = "F";
                break;
            case 8:
                letra = "P";
                break;
            case 9:
                letra = "D";
                break;
            case 10:
                letra = "X";
                break;
            case 11:
                letra = "B";
                break;
            case 12:
                letra = "N";
                break;
            case 13:
                letra = "J";
                break;
            case 14:
                letra = "Z";
                break;
            case 15:
                letra = "S";
                break;
            case 16:
                letra = "Q";
                break;
            case 17:
                letra = "V";
                break;
            case 18:
                letra = "H";
                break;
            case 19:
                letra = "L";
                break;
            case 20:
                letra = "C";
                break;
            case 21:
                letra = "K";
                break;
            case 22:
                letra = "E";
                break;
            default:
            alert("Número erróneo")
            }
        }
        alert("Tu DNI es el " + numero + "." + letra)
        console.log("Tu DNI es el " + numero + "." + letra)
        }else{
            if(numero != undefined){
                alert(numero + " no es un número")
            }
    }
}while(numero != undefined)
console.log("Los digitos de tu dni son " + numero + " y su letra es " + resto)

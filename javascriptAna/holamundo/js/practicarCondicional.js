'use strict'

//1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.

var edad = prompt("Qué edad tienes?")
if(Number(edad) == edad){
    if(edad >= 18){
        console.log("Ya eres mayor de edad. Tienes " + edad + " años. Puedes conducir")
    }else{
        console.log("Aún no eres mayor de edad. No puedes conducir")
    }
}

//2. Pide una nota (número). Muestra la calificación según la nota:
/*
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
*/

var nota = prompt("Qué nota has sacado en el examen?");
if(Number(nota) == nota){
   if(nota >= 0 && nota < 3){
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
        alert("Di la nota de verdad")
    }
}else{}

//3. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
//Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

var resultado = "";
do{
var cadenaTexto = prompt("Introduce palabras")
if(resultado == ""){
    resultado = resultado + cadenaTexto;
}else{
    resultado = resultado + " - " + cadenaTexto
}
}while(confirm("Desea continuar?"));
console.log(resultado)

//4. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un “alert” y
// seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

var suma = 0;
do{
var numeros = prompt("Introduce números al azar")
if(Number(numeros) == numeros){
    numeros = Number(numeros)
    suma = suma + numeros;
}else if(numeros != undefined){
    alert("No estas introduciendo un número válido")
}else{}
}while(numeros != undefined)
console.log(suma);

//5. Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad).
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
var dni = prompt("Introduce tu DNI");
if(Number(dni) == dni){
    dni = Number(dni)
    if(dni >= 0 && dni <= 99999999){
        resto = dni%23;
        switch(resto){
            case 0:
            letra = "T"
            break;
            case 1:
            letra = "R"
            break;
            case 2:
            letra = "W"
            break;
            case 3:
            letra = "A"
            break;
            case 4:
            letra = "G"
            break;
            case 5:
            letra = "M"
            break;
            case 6:
            letra = "Y"
            break;
            case 7:
            letra = "F"
            break;
            case 8:
            letra = "P"
            break;
            case 9:
            letra = "D"
            break;
            case 10:
            letra = "X"
            break;
            case 11:
            letra = "B"
            break;
            case 12:
            letra = "N"
            break;
            case 13:
            letra = "J"
            break;
            case 14:
            letra = "Z"
            break;
            case 15:
            letra = "S"
            break;
            case 16:
            letra = "Q"
            break;
            case 17:
            letra = "V"
            break;
            case 18:
            letra = "H"
            break;
            case 19:
            letra = "L"
            break;
            case 20:
            letra = "C"
            break;
            case 21:
            letra = "K"
            break;
            case 22:
            letra = "E"
            break;
            default:
            alert("Número erróneo")
            break;
        }
    }
    alert("Tu DNI con número " + dni + " tiene letra " + letra)
    console.log("Tu DNI con número " + dni + " tiene letra " + letra)
 }else{
     if(dni != undefined){
         alert(dni + " no es un número")
     }
 }
}while(dni != undefined)


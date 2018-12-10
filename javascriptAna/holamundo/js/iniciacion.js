'use strict'
//1.Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
/*
alert("Hello World");
*/
//2.Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
/*
document.write("Hellor World")
*/
//3.Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
/*
document.write(3+5)
*/
//4.Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
/*
var nombre = prompt("Dime tu nombre")
document.write("Hola " + nombre);
*/
//5.Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
/*
var numero1 = parseInt(prompt("Escribe un número"))
var numero2 = parseInt(prompt("Escribe un segundo número"))
document.write("La suma de tus números es " + numero1 + numero2)
*/
//6.Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
/*
var numero1 = parseInt(prompt("Escribe un número"))
var numero2 = parseInt(prompt("Escribe un segundo número"))
if(numero1 > numero2){
    document.write("El número " + numero1 + " es mayor que " + numero2)
}else{
    document.write("El número " + numero1 + " es menor que " + numero2)
}
*/
//7.Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
/*
var numero1 = parseInt(prompt("Escribe un número"))
var numero2 = parseInt(prompt("Escribe un segundo número"))
var numero3 = parseInt(prompt("Escribe un tercer número"))
if(numero1 > numero2 && numero1 > numero3){
    document.write("El número " + numero1 + " es el mayor de todos")
}else if(numero2 > numero1 && numero2 > numero3){
    document.write("El número " + numero2 + " es el mayor de todos")
}else{
    document.write("El número " + numero3 + " es el mayor de todos")
}
*/
//8.Escribe un programa que pida un número y diga si es divisible por 2
/*
var numero1 = parseInt(prompt("Escribe un número"))
if(numero1 % 2 == 0){
    document.write("El número " + numero1 + " es divisible por 2")
}
*/
//9.Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
/*
var frase = prompt("Introduce una frase")
var vocalA = ("La frase " + frase + " contiene la vocal 'a' y aparece " + frase.match(/[a]/gi).length + " veces")
console.log(vocalA);
*/
//10.Escribe un programa que pida una frase y escriba las vocales que aparecen
/*
var texto = prompt("Escribe una frase")
var largoTexto = texto.length
for(var i = 0; i < largoTexto; i++){
    if(texto.substr(i,1) == "a" || texto.substr(i,1) == "e" || texto.substr(i,1) == "i" || texto.substr(i,1) == "o" || texto.substr(i,1) == "u"){
        document.write(texto.substr(i,1))
    }
}
*/
//11.Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
//12.Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
//13.Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//14.Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)
//15.Escribir un programa que escriba en pantalla los divisores de un número dado
/*
var n1 = prompt("Escribe un número");
var i;
for (i=2;i < n1/2; i++) {
if (n1 % i == 0) {
document.write(i,", ");
}
}
*/
//16.Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
//17.Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

//Completar las condiciones de los if del siguiente script para que los mensajes de los alert() se muestren siempre de forma correcta:
/*
var numero1 = 5;
var numero2 = 8;
 
if(numero1 <= numero2) {
  alert("numero1 no es mayor que numero2");
}
if(numero2 >= 0) {
  alert("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
  alert("numero1 es negativo o distinto de cero");
}
if(++numero1 <= numero2) {
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
  }
  */

 //El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI
 // y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
 //El array de letras es:
//('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T') 
/*
var resto;
var letra;
var numero = parseInt(prompt("Introduce los digitos de tu dni"))
if(numero >= 0 && numero <= 99999999){
    resto = numero % 23
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
}else{
    if(numero != undefined){
        alert("No has introducido un número")
    }
}
alert("Los digitos de tu dni son " + numero + " y su letra es " + letra)
*/
//El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1.
// Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
//Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
/*
var numero = prompt("Introduce un número y se mostrará su factorial");
var resultado = 1;
 
for(var i=1; i<= numero; i++) {
  resultado = resultado * i;
}
alert(resultado);
*/
/*
var mensaje = "Hola Mundo! \n Que facil es incluir \'comillas simples\' y \"comillas dobles\""
alert(mensaje);
*/
/*
A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
Determinar cual de los dos elementos de texto es mayor
Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
*/

//El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI
// y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
//El array de letras es:
//var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
//Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:
/*
Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario 
que indique su número y su letra, se puede utilizar la función prompt())
En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario
indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha 
indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
*/
/*
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numero = prompt("Introduce tu dni")
var letra = prompt("Introduce la letra de tu dni")
var letraCorrecta;
if(numero < 0 && numero > 99999999){
    alert("El numero introducido no es correcto")
}else{
    letraCorrecta = letras[numero%23]
    console.log("letra Correcta -->"+letraCorrecta)
    console.log("letra Resultante -->"+letra)
    if(letraCorrecta != letra){
        alert("La letra no coincide con tu dni")
    }else{
        alert("Tu dni es correcto")
    }
}

//El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. 
//Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
//Utilizando la estructura for, crear un script que calcule el factorial de un número entero.

var numero = parseInt(prompt("Numero??"))
var resultado = 1;

for(var i = 1; i <= numero; i++){
    resultado *= i
}
console.log(resultado)

// Dado un Array de 100 posiciones numericas crear 3 uno con primos otro con impares y un terceros con los numeros fibonacci que esten dento del array
// KEEP CODING !!!


var contador = 100;
numeros.forEach(element => {
    console.log("el contador es al principio de la iteracion" + contador)
    console.log("el elemento es al principio de la iteracion" + element)
    element = contador;
    console.log("despues de igualar elemento a contador el contador es " + contador)
    console.log("despues de igualar elemento a contador el elemento es " + element)
    contador++
    console.log("despues de contador--, contador es " + contador)
    console.log("despues de contador--, elemento es " + element)
});
*/
/*
var numeros = new Array (100);
for(var i = 0; i <= 100; i++){
    numeros[i] = i
    console.log(" el valor de mi array es " + numeros[i] + " en la posicion " + i)
}
console.log("Mi array es " + numeros)

var numerosImpares = []
var numerosPrimos = []
var numerosFibonacci = []
var numerosMultiplosDe3 = []


for(var i = 0; i < numeros.length; i++){
    if(esPar(numeros[i])){
    }else{
        numerosImpares.push(numeros[i])
    }
    if(esPrimo(numeros[i])){
        numerosPrimos.push(numeros[i])
    }
    if(multiplosDe3(numeros[i])){
        numerosMultiplosDe3.push(numeros[i])
    }
    
}



console.log("Los numeros impares de mi array son: " + numerosImpares)
console.log("Los numeros primos de mi array son: " + numerosPrimos)
console.log("Los numeros fibonacci de mi array son: " + numerosFibonacci)
console.log("Los numeros múltiplos de 3 de mi array son: " + numerosMultiplosDe3)

function esPar(numero){
    if(numero % 2 == 0){
        console.log(numero + " es par")
        return true;
    }else{
        console.log(numero + "  es impar")
        return false;
    }
}

function esPrimo(numero){
    for(var i = 2; i < numero; i++){
        if(numero % i == 0){
            return false;
        }
    }
    return numero != 1
}

function multiplosDe3(numero){
    if(numero % 3 == 0){
        console.log(numero + " es múltiplo de 3")
        return true;
    }else{
        return false;
    }
}
*/
/*
var frutasRojas = ["frambuesa", "fresa", "manzana roja", "cerezas", "granada"]
var frutasVerdes = ["manzana verde", "peras", "verde", "verde"]
var frutasAmarillas = ["limon", "manzana amarilla", "naranja amarallia", "amarilla"]
var frutasLilas = ["ciruelas", "moras", "lilas", "lilas"]

var conjuntoDeFrutas = [frutasAmarillas, frutasLilas, frutasRojas, frutasVerdes]
var entradaColor = prompt("Introduce un color")
document.write("<h3>Las frutas de color " + entradaColor + " son: </h3>")
var resultado = saberFrutasPorSuColor(entradaColor)
resultado.forEach(element => {
    console.log(element)
    document.write("<li>" + element + "</li>")
    
});
console.log("Las frutas de color " + entradaColor + " son: " + resultado)

function saberFrutasPorSuColor(color){
    console.log("los colores son: " + color)
    switch(color){
        case "Rojas":
        return frutasRojas;
        break;
        case "Verdes":
        return frutasVerdes;
        break;
        case "Amarillas":
        return frutasAmarillas;
        break;
        case "Lilas":
        return frutasLilas;
        break;
    }
}
*/
//El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. 
//Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
//Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
/*
var numero = Number(prompt("introduce un numero"))
var resultado = 1;

    resultado = resultado * i
}
console.log("El factorial de " + numero + " es: " + resultado)
*/
/*
var numeros = new Array (100)
for(var i = 0; i<=100;i++){
    numeros[i] = i
    console.log("el valor de mi arra es: " + numeros[i] + " en la posicion " + i)
}
console.log("Mi array es: " + numeros)

var numerosPrimos = []
var numerosNoPrimos = []
var numerosPares = []
var numerosImpares = []

numeros.forEach(element => {
    if(esPrimo(element)){
        numerosPrimos.push(element)
    }else{
        numerosNoPrimos.push(element)
    }
    
});

numeros.forEach(element => {
    if(esImpar(element)){
        numerosImpares.push(element)
    }else{
        numerosPares.push(element)
    }
});

function esImpar(numero){
    if(numero%2 == 0){
        return false
    }else{
        return true
    }
}

function esPrimo(numero){
    for(var i = 2; i <= numero; i++){
        if(numero%i == 0){
            return false
        }else{
            return true
        }
    }
}
console.log("Mis numeros primos son: " + numerosPrimos)
console.log("Mis numeros no primos son: " + numerosNoPrimos)
console.log("Mis numeros impares son: " + numerosImpares)
console.log("Mis numeros pares son: " + numerosPares)
*/
//factorial
/*
var factorial = 5;
var resultado = 1;
for(var i = 1; i <= factorial; i++){
    resultado = resultado * i
}
console.log("el factorial de " + factorial + " es: " + resultado)
*/
//3. Haz un programa que repita un número determinado de veces una frase introducida por teclado.
/*
var contador = 4;

do {
    var entrada = prompt("introduce una frase")
    console.log("Mis frase: " + entrada + " en la vuelta " + contador)
} while (contador--);

*/
/*
El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto o 
módulo de la división entera del número de DNI entre el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
El array de letras es:
Por tanto, si el resto de la división es 0, la letra del DNI es la T; y, si el resto es 3, la letra es la A.
Con estos datos, y teniendo en cuenta que ya tienes almacenado en una variable llamada numero los números introducidos por el usuario, y en una variable llamada letra la
letra en mayúscula tecleada también por el mismo, elabora un pequeño script que:
a. En primer lugar (y en una sola instrucción) compruebe si el número es menor que 0 o mayor que 99999999.
Si ese es el caso, mostrar un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
b. Si el número es válido, calcula la letra que le corresponde según el método explicado anteriormente.
c. Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que 
la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
*/
/*
var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "‘X", "‘B", "‘N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

var numero = Number(prompt("Introduce los numeros de tu dni"))
var resto;
var letra;
if(numero < 0 && numero > 99999999){
    alert("El numero introducido no es válido")
}else{
    resto = numero%23
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
        case 23:
        letra = "T"
        break;
    }
}
console.log("El numero introducido " + numero + " corresponde con la letra " + letra)
*/
//EJERCICIO CURSO
/*
1. PIDA 6 NUMEROS POR PANTALLA Y LOS META EN ARRAY
2. MOSTRAR EL ARRAY ENTERO (TODOS SUS ELEMENTOS) EN EL CUERPO DE LA PAGINA Y EN LA CONSOLA
3. ORDENARLO  Y MOSTRARLO
4. MOSTRAR CUANTOS ELEMENTOS TIENE EL ARRAY
5. INVERTIR SU ORDEN Y MOSTRARLO
6. BUSQUEDA DE UN VALOR INTRODUCIDO POR EL USUARIO QUE NOS DIGA SI LO ENCUENBTRA Y SU INDICE
*/
/*
var numeros = []
for(var i = 0; i <= 5; i++){
    numeros.push(Number(prompt("Introduce un numero")))
}
console.log(numeros)
document.write("<h3>LOS ELEMENTOS DE MI ARRAY SON:</h3>")
numeros.forEach(element => {
    document.write("<li>" + element + "</li> <br/>")
});

console.log("Mis numeros ordenador quedan así: " + numeros.sort(function(a,b){return a-b}))
console.log("Mis numeros invertidos quedan así: " + numeros.reverse())
console.log("Mi array tiene " + numeros.length + " elementos")

var entrada = Number(prompt("Introduce un numero a buscar"))
var posicion = numeros.findIndex(elemento => elemento == entrada)
if(posicion != -1){
    document.write("<h3>ENCONTRADO</h3>")
    document.write("EL numero " + entrada + " esta en la posicion " + posicion)
} else{
    document.write("<h3>NO ENCONTRADO</h3>")

}
*/

//EJERCICIO CUROS 2
// QUE NOS DIGA SI UN NUMERO ES PAR O IMPAR
//SI NO ES VALIDO QUE NOS PIDA DE NUEVO EL NUMERO 
/*
var numero = Number(prompt("Introduce un numero"))

while(isNaN(numero)){
    numero = Number(prompt("Introduce un numero"))
}
if(numero % 2 == 0){
    console.log(numero + " Es par")
}else{
    console.log(numero + " es impar")
}
*/

//hacer un programa que muestre todos los numeros entre 2 numeros introducidos por el usuario
/*
var numero1 = Number(prompt("Introduce un numero"))
var numero2 = Number(prompt("Introduce un segundo numero"))

for(var i = numero1; i <= numero2; i+=2){
    console.log(i)
}
*/


//UTILIZANDO UN BUCLE, MOSTRAR LA SUMA Y LA MEDIA DE LOS NUMEROS INTRODUCIDOS HASTA INTRODUCIR UN NUMERO NEGATIVO Y AHI MOSTRAR EL RESULTADO
/*
var suma = 0;
var contador = 0;

do {
    var numero = Number(prompt("Introduce un numero"))
    console.log(numero)
    suma += numero
    contador++
} while (numero > 0);
console.log("la suma de todos los numeros introducidos es: " + suma)
console.log(suma/contador)
*/

//muestra todos los divisores introducidos en un prompt
/*
var numero = Number(prompt("Introduce un numero"))
for(var i = 1; i <= numero; i++){
    if(numero%i == 0){
        console.log("divisores del " + numero + " son: " + i)
    }
}
*/

//calculadora
/*
1. pida dos numeros por pantalla
2. si metemos uno mal que nos lo vuelva a pedir 
3. mostrar en cuerpo, alerta y por consola
*/
/*
var numero1 = Number(prompt("Introduce un numero"))
var numero2 = Number(prompt("Introduce un segundo numero"))

var resultado = " la suma de los numeros es: " + (numero1+numero2) + " \n" +
                " la resta es: " + (numero1-numero2) + " \n" +
                " la division es: " + (numero1/numero2) + " \n" +
                " la multiplicacion es: " + (numero1*numero2) + " \n"

var resultado2 = " la suma de los numeros es: " + (numero1+numero2) + " <br/>" +
                 " la resta es: " + (numero1-numero2) + " <br/>" +
                 " la division es: " + (numero1/numero2) + " <br/>" +
                 " la multiplicacion es: " + (numero1*numero2) + " <br/>"

console.log(resultado)
alert(resultado)
document.write(resultado2)
*/

//tabla de multiplicar
/*
var numero = Number(prompt("Introduce un numero"))
var resultado = 0;
for(var i = 1; i <= 10; i++){
    resultado = i * numero
    console.log(numero + " X " + i + " = " + resultado)
}

//de todas las tablas de multiplicar
for(var i = 1; i <= 10; i++){
    for(var c = 1; c <= 10; c++){
        resultado = i * c
        console.log(i + " X " + c + " = " + resultado)
    }
}
    
*/
   
var numero = []

for(var i = 0; i < 5; i++){
    numero[i] = Number(prompt("Introduce un numero"))
    numero.push(numero[i])
}
console.log(numero)
document.write("<h3>Numeros introducidos</h3>")
numero.forEach(element => {
    document.write("<li>"+ element +"</li><br/>")
});
console.log("Los numeros ordenados son: " + numero.sort(function(a,b){return a-b}))
console.log("Los numeros invertidos son: " + numero.reverse())
console.log("el array tiene " + numero.length + " elementos")

var entrada = Number(prompt("introduce un numero a buscar"))
var posicion = numero.findIndex(numero => numero == entrada)
if(posicion != -1){
    document.write("<h3>ENCONTRADO</h3>")
    document.write("el número " + entrada + " se encuentra en la posicion " + posicion)
}else{
    document.write("<h3> NO ENCONTRADO</h3>")
}



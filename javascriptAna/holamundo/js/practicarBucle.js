'use strict'

//1. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
/*
1
22
333
4444
55555
666666
…….
*/
for(var i = 0; i <= 30; i++){
    for(var c = 1; c <= i; c++ ){
        document.write(i)
    }
    document.write("<br>")
}

//2. Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario.

var numero = prompt("Introduce un número para la pirámide inversa")
if(Number(numero) == numero){
    for(var i = numero; i >= 1; i--){
        for(var c = i; c > 0; c--){
            document.write(i)
        }
        document.write("<br>")
    }
}else{}

//3. Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

var numero = prompt("Introduce un número no mayor de 50")

if(Number(numero) == numero){
    for(var i = 1; i <= numero; i++){
        for(var c = 1; c <= i; c++){
            document.write(c)
        }
        document.write("<br>")
    }
}else{}

//4. Un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas
// muestre una línea horizontal.

var numero;
for(var i = 1; i <= 500; i++){
    document.write(i + "<br>")
    if(i%4 == 0){
        document.write(" es múltiplo de 4 <br>")
    }
    if(i%9 == 0){
        document.write(" es múltiplo de 9")
    }
    if(i%5 == 0){
        document.write("<hr>")
    }else{}
}



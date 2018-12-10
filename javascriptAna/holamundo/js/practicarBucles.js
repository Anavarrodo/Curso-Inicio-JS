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
/*
for(var i = 0; i <= 30; i++){
    for(var c = 1; c <= i; c++){
        document.write(i)
    }
    document.write("<br>")
}

//piramide inversa
for(var i = 30; i >= 0; i--){
    for(var c = i; c >= 1; c--){
        document.write(i)
    }
    document.write("<br>")
}
*/

//2. Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 30).

var numero = prompt("Introduce un número");
if(Number(numero) == numero){
    for(var i = numero; i >= 0; i--){
        for(var c = i; c >= 1; c--){
            document.write(i)
        }
        document.write("<br>")
    }
}else{
    console.log("numero invalido")
}


//3. Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) :

var numero = prompt("Introduce un numero");

if(Number(numero) == numero){
    if(numero >= 0 && numero <= 50){
        for(var i = 0; i <= numero; i++){
            for(var c = 1; c <= i; c++){
                document.write(c);
            }document.write("<br>")
        }
    }else{}
}else{}

//4. Un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
/*
1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/

for(var i = 1; i <= 500; i++){
    document.write(i)
    document.write("<br>")
    if(i % 4 == 0){
        document.write(" (Múltiplos de 4)")
        document.write("<br>")
    }
    if(i % 9 == 0){
        document.write(" (Múltiplos de 9)")
        document.write("<br>")
    }
    if(i % 5 == 5){
        document.write(" <hr>")
        document.write("<br>")
    }
}









//5. Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
//Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
var i,j;
//PEDIMOS POR TECLADO EL NÚMERO DE FILAS
//Number fuerza a que se introduzca un número
var filas = Number(prompt("Introduce numero de filas"));
//PEDIMOS EL NÚMERO DE COLUMNAS
var colum = Number(prompt("Introduce numero de columnas"));
//MULTIPLICAMOS filas * columnas Y GUARDAMOS EL RESULTADO EN res
var res = filas * colum;
//COMENZAMOS A IMPRIMIR LA TABLA
document.write("<table border>");
//BUCLE DESDE 0 HASTA EL NÚMERO DE FILAS
for (i = 0; i < filas; i++) {
    //EN CADA FILA ESCRIBIMOS UN <tr> PARA COMENZAR LA FILA
    document.write("<tr>");
    //BUCLE DESDE 0 HASTA EL NÚMERO DE COLUMNAS
    for (j = 0; j < colum; j++) {
        //EN CADA UNA ESCRIBIMOS UN <td> PARA COMENZAR UNA CELDA
        document.write("<td>");
        //LUEGO ESCRIBIMOS EL VALOR DE res
        document.write(res);
        //LE RESTAMOS 1 A res
        res--;
        //Y ESCRIBIMOS UN </td> PARA CERRAR LA CELDA
        document.write("</td>");
    }
    //ESCRIBIMOS UN </tr> PORQUE SE TERMINÓ LA FILA
    document.write("</tr>");
}
//Y POR ÚLTIMO CERRAMOS LA TABLA CON </table>
document.write("</table>");

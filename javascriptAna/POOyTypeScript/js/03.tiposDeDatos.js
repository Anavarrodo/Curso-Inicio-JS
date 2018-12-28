//STRING
var nombre = "Ana Navarro";
console.log(nombre);
//NUMBER
var numero = 30;
console.log(numero);
//BOOLEANO
var avenger = true;
if (avenger) {
    console.log("Estamos salvados!!");
}
else {
    console.log("Ooops!! ohh");
}
//ANY. permite cualquier tipo de dato
var cualquiera = "Hello";
cualquiera = 78;
cualquiera = false;
console.log(cualquiera);
//ARRAYS. tenemos que indicar el tipo de datos del que está compuesto nuestro array.
//  si van a ser dif.datos, indicamos any
var asignaturas = ["Lengua", "Matemáticas", "Gimnasia", "Plástica"];
console.log(asignaturas);
//Otra forma de definir arrays es:
var deportes = ["Natación", "Atletismo", "Boxeo", "Piragüismo"];
console.log(deportes);
//también podemos asignarles dos o mas tipos de datos a una variables:
var color = "Rosa";
color = 1;
console.log(color);
var plato = "Llano";
plato = 10;
console.log(plato);
//LET vs VAR
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 50;
    console.log("Dentro del if: " + numero1_1 + " y " + numero2);
}
console.log("Fuera del if: " + numero1 + " y " + numero2);

//STRING

let nombre: string = "Ana Navarro"
console.log(nombre)

//NUMBER

let numero: number = 30
console.log(numero)

//BOOLEANO
let avenger: boolean = true;
if(avenger){
    console.log("Estamos salvados!!")
}else{
    console.log("Ooops!! ohh")
}

//ANY. permite cualquier tipo de dato

let cualquiera: any = "Hello";
cualquiera = 78;
cualquiera = false;
console.log(cualquiera)

//ARRAYS. tenemos que indicar el tipo de datos del que está compuesto nuestro array.
//  si van a ser dif.datos, indicamos any

var asignaturas: Array<string> = ["Lengua", "Matemáticas", "Gimnasia", "Plástica"]
console.log(asignaturas)

//Otra forma de definir arrays es:

var deportes: string[] = ["Natación", "Atletismo", "Boxeo", "Piragüismo"]
console.log(deportes)

//también podemos asignarles dos o mas tipos de datos a una variables:

let color: string | number = "Rosa";
color = 1;
console.log(color)

//DATOS PERSONALIZADOS
//Otra forma de hacerlo es creando una variable que me asigne esos tipos de datos:

type letrasonumeros = string | number;

let plato: letrasonumeros = "Llano";
plato= 10;
console.log(plato)

//LET vs VAR

var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2= 50;
    console.log("Dentro del if: " + numero1 + " y " + numero2)
}
console.log("Fuera del if: " + numero1 + " y " + numero2)







// TIPOS DE DATOS

// STRING

let cadena: string = "Ana Navarro";

// NUMBER

let numero: number = 30;

// BOOLEAN

let verdaderoFalso: boolean = true;

// ANY 

let cualquierDato: any = "Soy cualquier cosa"
cualquierDato = 150;

// ARRAYS

let asignaturas: Array<string> = ["Lenguaje", "Matemáticas", "Inglés", "Plástica"]
let notas: number[] = [1, 2, 3, 4, 5, 6]
let tintes: any[] = [1, "Negro", 2, "Marrón"]

// TIPO DE DATO PERSONALIZADO

type alfanumerico = string | number;

// MULTIPLES TIPOS DE DATOS

let numeroYLetra: alfanumerico = "Letras";
numeroYLetra = 620;

// LET Y VAR

var numero1 = 10;
var numero2 = 5;

if(numero1 == 10){
    let numero1 = 8;
    var numero2 = 3;
    console.log(numero1, numero2)
}
console.log(numero1, numero2)

console.log(cadena, numero, verdaderoFalso, cualquierDato, asignaturas, notas, tintes, numeroYLetra)


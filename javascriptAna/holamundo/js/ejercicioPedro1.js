'use strict'

//1. CREA UN ARRAY DE NOMBRES Y UN ARRAY DE APELLIDOS Y PINTA POR CONSOLA UNA FRASE SALUDANDO A TODOS POR SU NOMBRE Y APELLIDOS
//ORDENAR LOS NOMBRES POR ORDEN ALFABETICO
var nombres = ["Ana", "Pedro", "Lola", "Anastasia", "Carmen", "Carolina"]
var apellidos = ["Navarro", "Gonzalez", "Perez", "Mora", "Dominguez", "Herrera"]
console.log(nombres.sort())
for(var i = 0; i < nombres.length; i++){
    var presentacionNombre = nombres[i]
    var presentacionApellidos = apellidos[i]
    //console.log("Mi nombre es: " + nombres[i] + " y está en la posición " + nombres.indexOf(nombres[i])) 
    //console.log("Mi nombre es: " + apellidos[i] + " y está en la posición " + apellidos.indexOf(apellidos[i])) 
    console.log("Hola!! soy: " + presentacionNombre + " " + presentacionApellidos) 
}

//2.CREA UN ARRAY CON MODELOS DE COCHES Y OTRO CON MARCAS COCHES Y PINTAR UNA FRASE DICIENDO MARCA Y MODELO

var marcasDeCoche = ["Audi", "Citroen", "Ford", "Opel", "Mercedes", "BMW"]
var modelosDeCoches = ["Corsa", "x1", "glc", "a3", "c4", "Fiesta"]

function busquedadeModeloPorMarca(marca){
    //console.log("la marca del coche es: " + marca)
    switch(marca){
        case "Audi":
        console.log("Su modelos es: " + modelosDeCoches[3])
        break;
        case "Citroen":
        console.log("Su modelos es: " + modelosDeCoches[4])
        break;
        case "Ford":
        console.log("Su modelos es: " + modelosDeCoches[5])
        break;
        case "Opel":
        console.log("Su modelos es: " + modelosDeCoches[0])
        break;
        case "Mercedes":
        console.log("Su modelos es: " + modelosDeCoches[2])
        break;
        case "BMW":
        console.log("Su modelos es: " + modelosDeCoches[1])
        break;
    }
}

//3.CREAR UN ARRAY DE MARCA DE COCHE CON SUS MODELOS Y QUE ME SAQUE TODOS SUS MODELOS AL LLAMAR A LA MARCA.
var audi = ["A1", "A3", "A4", "Q2", "R8", "RS"]
var citroen = ["Berlingo", "C4", "C2", "E-Mehari", "C-Zero", "C-Elysee"]
var ford = ["Fiesta", "Ecosport", "Focus", "Kuga", "Tourneo", "Mondeo"]
var opel = ["Astra", "Corsa", "Adam", "Karl", "Zafira", "Insignia"]
var mercedes = ["CLA", "Clase A", "GLC", "SLC", "GLE", "AMG-GT"]
var bmw = ["Serie 5", "X2", "Z4", "M3", "i8", "X7", "X8"]

var marcasDeCocheCompletas = [audi, citroen, ford, opel, mercedes, bmw]
var pedirMarca = prompt("dime una marca")

var resultado = recuperarArrayPorNombre(pedirMarca)
document.write("<h1>MODELOS DISPONIBKES DE LA MARCA " + pedirMarca.toUpperCase() + " </h1>")
resultado.forEach(element => {
    console.log("modelo =  " + element )
    document.write("<li>" + element + " </li>")
});

function recuperarArrayPorNombre(marca){
    switch(marca){
        case "audi":
        return  marcasDeCocheCompletas[0]
        break;
        case "citroen":
        return  marcasDeCocheCompletas[1]
        break;
        case "ford":
        return  marcasDeCocheCompletas[2]
        break;
        case "opel":
        return  marcasDeCocheCompletas[3]
        break;
        case "mercedes":
        return  marcasDeCocheCompletas[4]
        break;
        case "bmw":
        return  marcasDeCocheCompletas[5]
        break;
    }
}

//EJERCICIOS PEDRO
//2.CREA UNA FUNCION QUE DADO UN SIGNO DEL ZODIACO TE DEVUELVA EL MES EN EL QUE HAS HABER NACIDO.
//nota 0
function mesDeNacimientoPorSigno(signo){
    console.log("El signo del zodiaco es " + signo)
    var indice = signosDelZodiaco.indexOf(signo)
    console.log("El indice es " + indice)
    var mes = meses[indice]
    console.log("Los meses del array son " + mes)
    return mes;
}

//3. CREA UNA FUNCION QUE METIENDO TU MES DE NACIMIENTO TE DIGA TU SIGNO DEL ZODIACO.
//nota 3 
 function signoZodiacoPorNacimiento(numeroDeMes){
    console.log("El número del mes es " + numeroDeMes)
    var nuevoIndice = numeroDeMes -1
    var mes = meses[nuevoIndice]
    console.log("el mes " + numeroDeMes + " corresponde a: " + mes)
    var signo = signosDelZodiaco[nuevoIndice]
    console.log("el mes " + mes + " corresponde a: " + signo )
    return signo;
 }

 //1.CREA UNA FUNCION QUE METIENDOLE UN MES TE DEVUELVE EL NUMERO DE MES QUE ES.
// nota 1.5
var meses = ["enero", "febrero", "marzo", "abril","mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
var signosDelZodiaco = ["acuario", "piscis", "aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio"]



 //4. DADO UN AÑO QUE TE DEVUELVA UN SIGNO DEL ZODIACO CHINO
var anosDeNacimiento = [1984, 1985, 1986] 
var signosChinosDelZodiaco = ["Rata", "Bufalo", "Tigre"]

function signoDelZodiacoChinoPorAno(ano){
    console.log("Año de busqueda: " + ano)
    var indice = anosDeNacimiento.indexOf(ano);
    console.log("el indice es: " + indice)
    console.log("ignosChinosDelZodiaco[0] --> " + signosChinosDelZodiaco[0])
    var signo = signosChinosDelZodiaco[indice]
    console.log("Signo -->"+signo)
    return signo
 }

 //5. DADO UN STRING QUE META EL USUARIO DECIR NUMERO DE VOCALES Y TAMAÑO TOTAL DE LA FRASE
 //crea un array llamada vocales y cada vez que haya una vocal, metela.
//crea una funcion que pasandole un array y una letra devuelva true si la letrta existe y false sino
//que no s repitan las vocales en el array de vocales
var frase = prompt("Introduce una frase")
var vocales = []
var fraseConvertidaEnArray = frase.split("")
console.log("Mi array es " + fraseConvertidaEnArray)
var numeroVocales = 0;
for(var i = 0; i <= fraseConvertidaEnArray.length; i++){
    
    switch (fraseConvertidaEnArray[i]){
        case "a":
      vocales.push(fraseConvertidaEnArray[i])
       numeroVocales++;
        break;
        case "e":
       vocales.push(fraseConvertidaEnArray[i])
          numeroVocales++;
        break;
        case "i":
      vocales.push(fraseConvertidaEnArray[i])
        numeroVocales++;
        break;
        case "o":
        vocales.push(fraseConvertidaEnArray[i])
        numeroVocales++;
        break;
        case "u":
        vocales.push(fraseConvertidaEnArray[i])
        numeroVocales++;
        break;
       
    }
}
console.log("El total de vocales es: " + numeroVocales)
console.log("El tamaño total de mi array es: " + fraseConvertidaEnArray.length)
console.log("Mi array de vocales es: " + vocales)

var arrayDeLetrasNoRepetidas = []

vocales.forEach(element => {
    if(!existeLetraEnArray(arrayDeLetrasNoRepetidas, element)){
        arrayDeLetrasNoRepetidas.push(element)
    }
});

console.log("Aquí están las letras sin repetir " + arrayDeLetrasNoRepetidas)



function existeLetraEnArray(array, letra){
    if(array.indexOf(letra) == -1){
        console.log("Letras "+letra + " no existe en vocales -> vocales = "+vocales)
        return false;
       
    }
        console.log("Letras "+letra + " Existe en vocales -> vocales = "+vocales)
    return true;
}
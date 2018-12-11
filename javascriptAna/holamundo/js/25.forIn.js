'use strict'

//FOR IN
//OTRA FORMA DE RECORRER UN ARRAY

var lenguajes = ["Python", "Java", "Go", "PHP", "JS"]
for(var indice in lenguajes){
    document.write("<li>" + lenguajes[indice] +"</li>")
}
function numeroDelMesPorMes(mes){
    console.log("la valor de mi array es " + mes)
    var resultado = meses.indexOf(mes) + 1
    console.log("el indice de mi es array es: " + resultado)
    return resultado;
}

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
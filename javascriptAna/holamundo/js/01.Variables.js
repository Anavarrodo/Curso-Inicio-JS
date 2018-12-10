'use strict'

//VARIABLES.
//Una variable es un contenedor de información. Se definen con la palabra reservada 'var'.

var pais = "España";
var continente = "Europa";
var año = 2018;
var paisYContinente = pais + " " + continente;

pais = "Estados Unidos"
continente = "América" //Sustituimos los valores anteriores

console.log("Yo vivo en " + pais + " que está en " + continente + " y vivimos en el " + año)
alert(paisYContinente); //sigue apareciendo españa y europa ya que la variable paisYContinente se definió antes del cambio.


//LET Y VAR
//VAR define una varible global o local sin importar donde esté localizado el bloque
//Ejemplo:

var numero = 40;
console.log(numero) // numero vale 40

if(true){
    numero = 50;
    console.log(numero) // numero vale 50
}
console.log(numero) // numero vale 50

//LET permite definir variables limitando su alcance al bloque, declaracion o expresion donde se esté usando
//Ejemplo:

var texto = "Me gustan los caracoles"
console.log(texto) // texto caracoles

if(true){
    let texto  = "Me gustan las cabrillas"
    console.log(texto) // texto cabrillas
}
console.log(texto) // texto caracoles


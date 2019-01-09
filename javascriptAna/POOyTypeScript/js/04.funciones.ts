
// en typescript podemos indicar que tipoo de dato es el parametro y que tipo de dato nos devuelve

function getNumero(numero : number = 13):string{
    return "El número es el " + numero
}

console.log(getNumero())
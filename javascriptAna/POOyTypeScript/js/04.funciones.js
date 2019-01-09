// en typescript podemos indicar que tipoo de dato es el parametro y que tipo de dato nos devuelve
function getNumero(numero) {
    if (numero === void 0) { numero = 13; }
    return "El número es el " + numero;
}
console.log(getNumero());

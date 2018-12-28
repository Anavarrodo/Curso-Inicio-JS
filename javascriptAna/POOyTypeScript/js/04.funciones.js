//Con typeScript podemos asignarle qué tipo de dato va a ser un parámetro
// y qué tipo de dato nos va a devolver:
function getNumero(numero) {
    if (numero === void 0) { numero = 10; }
    return "El número es " + numero;
}
console.log(getNumero(30));

//Con typeScript podemos asignarle qué tipo de dato va a ser un parámetro
// y qué tipo de dato nos va a devolver:

function getNumero(numero:number = 10):string{
return "El número es " + numero
}
console.log(getNumero(30))
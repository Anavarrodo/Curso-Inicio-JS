//El nombre del archivo debe ser igual a la clase.
//las propiedades puedes ser públicas. Para que puedan ser utilizadas fuera de la clase
//CONTRUCTOR: METODO DENTRO DE UNA CLASE PARA DARLE UN VALOR INICIAL A LAS PROPIEDAS DEL OBJETO AL CREARLO
// Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.color = "Rosa";
camiseta.modelo = "cuello vuelto",
    camiseta.talla = "XS",
    camiseta.marca = "Guess",
    camiseta.precio = 15;
var fiesta = new Camiseta();
fiesta.color = "Negro",
    fiesta.modelo = "lentejuelas",
    fiesta.talla = "S",
    fiesta.marca = "Uterque",
    fiesta.precio = 50;
console.log(camiseta, fiesta);
////////////////////////////////////////////////////////////////////////////
//con propiedades privadas:
var Vestidos = /** @class */ (function () {
    //Métodos (funciones o acciones del objeto)
    function Vestidos(color, modelo, talla, marca, precio) {
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.marca = marca;
        this.precio = precio;
    }
    Vestidos.prototype.setColor = function (color) {
        this.color = color;
    };
    Vestidos.prototype.getColor = function (color) {
        return this.color;
    };
    return Vestidos;
}());
var vestidoLargo = new Vestidos("Rosa", "Drapeado", "XS", "Guess", 69);
vestidoLargo.setColor("Rosa Brillante");
console.log(vestidoLargo);

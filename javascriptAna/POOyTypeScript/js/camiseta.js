var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//CLASE(molde del objeto)
var Camiseta = /** @class */ (function () {
    //METODOS (funciones que ejecuta el objeto)
    //CONSTRUCTOR (primer metodo que creamos siempre y se usa para instanciar las variables, darle valor a las propiedades)
    function Camiseta(color, talla, marca, precio, modelo) {
        this.color = color;
        this.talla = talla;
        this.marca = marca;
        this.precio = precio;
        this.modelo = modelo;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
// CLASE HIJA
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudaderaGuess = new Sudadera("Gris", "M", "Guess", 150, "Manga Larga");
sudaderaGuess.setCapucha(true);
sudaderaGuess.talla = "S";
console.log(sudaderaGuess);
var camiseta = new Camiseta("Rojo", "XS", "Guess", 85.99, "Manga corta");
camiseta.setColor("Rosa");
console.log(camiseta);

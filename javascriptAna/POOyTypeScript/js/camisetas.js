//El nombre del archivo debe ser igual a la clase.
//las propiedades puedes ser públicas. Para que puedan ser utilizadas fuera de la clase
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
    Vestidos.prototype.getColor = function () {
        return this.color;
    };
    return Vestidos;
}());
//HERENCIA: COGER LAS PROPIEDAS DE LA CLASE PADRE(Vestidos).
var VestidoCocktel = /** @class */ (function (_super) {
    __extends(VestidoCocktel, _super);
    function VestidoCocktel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VestidoCocktel.prototype.setCinturon = function (cinturon) {
        this.cinturon = cinturon;
    };
    VestidoCocktel.prototype.getCinturon = function () {
        return this.cinturon;
    };
    return VestidoCocktel;
}(Vestidos));
var vestidos = new Vestidos("Plum", "Drapeado", "XS", "Guess", 159);
console.log(vestidos);
var vestidoCocktel = new VestidoCocktel("", "Ajustado", "S", "Maximo Dutti", 200);
vestidoCocktel.setCinturon(true);
vestidoCocktel.setColor("Rosa");
console.log(vestidoCocktel);

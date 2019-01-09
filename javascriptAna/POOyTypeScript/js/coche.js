var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = "Rojo";
        this.velocidad = 150;
        if (modelo == null) {
            this.modelo = "Opel Astra";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.acelerar = function () {
        return this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        return this.velocidad--;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var astra = new Coche();
console.log(astra);
console.log("El modelo de mi Coche es: " + astra.getModelo());
astra.acelerar();
astra.acelerar();
console.log("La velocidad del Astra es " + astra.getVelocidad());
astra.frenar();
console.log("La velocidad del Astra despues de frenar es " + astra.getVelocidad());
console.log("El color del Astra es " + astra.getColor());
/*
var audi = new Coche()
var mercedes = new Coche()
audi.setColor("Negro")
mercedes.setColor("Blanco")
console.log("El color del Audi es " + audi.getColor())
console.log("El color del Mercedes es " + mercedes.getColor())
*/

var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = "Rosa Plateado";
        this.velocidad = 100;
        if (modelo == null) {
            this.modelo = "BMV";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche = new Coche("Opel Astra");
console.log("El modelo de coche es: " + coche.getModelo());
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("La velocidad de coche acelerando es: " + coche.getVelocidad());
coche.setColor("Rojo");
coche.frenar();
coche.frenar();
console.log("La velocidad de coche frenando es: " + coche.getVelocidad());
console.log("El color de coche es: " + coche.getColor());

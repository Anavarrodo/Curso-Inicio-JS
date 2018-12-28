//MODULOS
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
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(nombre) {
            console.log("Mi tienda de ropa se llama " + nombre);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Peluqueria = /** @class */ (function () {
        function Peluqueria(nombre) {
            console.log("Mi tienda de peluqueria se llama " + nombre);
        }
        return Peluqueria;
    }());
    Tienda.Peluqueria = Peluqueria;
})(Tienda || (Tienda = {}));
var nuevaTienda = Tienda.Peluqueria;
var nombreComercial = new nuevaTienda("'Pelitos Pelos'");
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    return Programa;
}());
//HERENCIA
var EditorVideo = /** @class */ (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    EditorVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    EditorVideo.prototype.getAllData = function () {
        return "Mi programa " + this.getNombre() + " en la versión " + this.getVersion() + " tiene un timeline de " + this.getTimeline();
    };
    return EditorVideo;
}(Programa));
var editor = new EditorVideo();
editor.setVersion(8);
editor.setNombre("Camtasia Studio");
editor.setTimeline(4000);
console.log(editor.getAllData());
//CREAR FORMULARIO QUE NOS PIDA PROGRAMAS Y LOS MUESTRE POR EL CUERPO
var conjuntoProgramas = [];
function añadir() {
    var nombreCampo = document.getElementById("campoNombre").value;
    var sofware = new Programa();
    sofware.setNombre(nombreCampo);
    conjuntoProgramas.push(sofware);
    var list = "";
    for (var i = 0; i < conjuntoProgramas.length; i++) {
        list = list + "<li>" + conjuntoProgramas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("campoNombre").value = "";
}

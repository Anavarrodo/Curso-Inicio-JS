//MODULOS

module Tienda{
    export class Ropa{
        public nombre: string;
        constructor(nombre){
            console.log("Mi tienda de ropa se llama " + nombre)
        }
    }

    export class Peluqueria{
        public nombre: string;
        constructor(nombre){
            console.log("Mi tienda de peluqueria se llama " + nombre)
        }
    }
}

import nuevaTienda = Tienda.Peluqueria;
var nombreComercial = new nuevaTienda("'Pelitos Pelos'")

class Programa{
    public nombre: string;
    public version: number;
    
    setNombre(nombre){
        this.nombre = nombre
    }

    setVersion(version){
        this.version = version
    }

    getNombre(){
        return this.nombre
    }

    getVersion(){
        return this.version
    }
}

//HERENCIA

class EditorVideo extends Programa{
    public timeline: number;

    setTimeline(timeline){
        this.timeline = timeline
    }

    getTimeline(){
        return this.timeline
    }

    getAllData(){
        return "Mi programa " + this.getNombre() + " en la versión " + this.getVersion() + " tiene un timeline de " + this.getTimeline()
    }
}

var editor = new EditorVideo()
editor.setVersion(8)
editor.setNombre("Camtasia Studio")
editor.setTimeline(4000)

console.log(editor.getAllData())



//CREAR FORMULARIO QUE NOS PIDA PROGRAMAS Y LOS MUESTRE POR EL CUERPO

var conjuntoProgramas = []

function añadir(){
    var nombreCampo = (<HTMLInputElement>document.getElementById("campoNombre")).value

    var sofware = new Programa()
    sofware.setNombre(nombreCampo)
    conjuntoProgramas.push(sofware)

    var list = "";
    for(var i = 0; i < conjuntoProgramas.length; i++){
        list = list + "<li>" + conjuntoProgramas[i].getNombre() + "</li>"
    }

    var listado = <HTMLElement>document.getElementById("listado")
    listado.innerHTML = list;

    (<HTMLInputElement>document.getElementById("campoNombre")).value = ""

 }
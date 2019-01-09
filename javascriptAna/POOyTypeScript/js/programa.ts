
module Tienda{
    export class Ropa{
        constructor(public noticia : string){
            alert(noticia)
        }
    }
}

import Zara = Tienda.Ropa
let zara = new Zara("Rebajas!!")

class Programa{
    
    public nombre : string
    public version : number

    setNombre(nombre){
        this.nombre = nombre
    }

    getNombre(){
        return this.nombre
    }

    setVersion(numero){
        this.version = numero
    }

    getVersion(){
        return this.version
    }
}

class editorVideo extends Programa{
    
    public timeline: number

    setTimeline(timeline){
        this.timeline = timeline
    }

    getTimeline(){
        return this.timeline
    }

    getAllData(){
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline() + "."
    }
}

var editor = new editorVideo()
editor.setVersion(1)
editor.setNombre("Camtasia Studio")
editor.setTimeline(4000)
console.log(editor.getAllData())

//LOGICA DEL FORMULARIO

var programas = []

function guardar(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString()

    var programa = new Programa
    programas.push(programa)
    programa.setNombre(nombre)

    var list = "" 
    for(var i = 0; i < programas.length; i++){
        list = list + "<li>" + programas[i].getNombre() + "</li>"
    }

    var listado = <HTMLElement>document.getElementById("listado")
    listado.innerHTML = list;

    (<HTMLInputElement>document.getElementById("nombre")).value = ""
}


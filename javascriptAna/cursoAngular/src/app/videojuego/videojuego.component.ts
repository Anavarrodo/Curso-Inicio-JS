
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class videojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public descripcion: string
    constructor(){
        this.descripcion = "Los juegos más populares para Ana Navarro"
        console.log("Componente videojuego.component.ts cargado correctamente")
    }

    ngOnInit(){
        console.log("OnInit ejecutado")
    }

    ngDoCheck(){
        console.log("DoCheck ejecutado")
    }

    cambiarDescripcion(){
        this.descripcion = "Hola holita amigos!!"
    }

    ngOnDestroy(){
        console.log("OnDestroy ejecutado")
    }
}
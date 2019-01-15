import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public descripcion: string;

    constructor(){
        this.titulo = "Videojuegos!!"
        this.descripcion = "Los videojuegos más demandados del momento"
    }

    ngOnInit(){
        console.log("OnInit cargado")
    }

    ngDoCheck(){
        console.log("DoCheck cargado")
    }

    cambiarTitulo(){
        this.titulo = "Acabamos de cambiar este título"
    }

    ngOnDestroy(){
        console.log("OnDestroy cargado!!")
    }

  
}
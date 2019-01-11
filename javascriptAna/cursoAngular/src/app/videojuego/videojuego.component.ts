import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class videojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public descripcion: string;
 
    

    constructor(){
        this.titulo = "Videojuegos!!";
        this.descripcion = "Estos son los videojuegos de moda:";
        
 
    }

    ngOnInit(){
        // console.log("OnInit ejecutado")
    }

    ngDoCheck(){
        // console.log("DoCheck ejecutado")
    }

    cambiarTitulo(){
        this.titulo = "Videojuegos para todos!!"
    }

    ngOnDestroy(){
        // console.log("OnDestroy ejecutado")
    }

   
}

import { Component } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html' 
        
    
})

export class videojuegoComponent{
    public titulo: string;
    public descripcion: string;
    
    constructor(){
        this.titulo = "Videojuegos!!"
        this.descripcion = "Los videojuegos más populares para Ana Navarro"
        console.log("Cargado correctamente el componente videojuego.component.ts")
    }
}
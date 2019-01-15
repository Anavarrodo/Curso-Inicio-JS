import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'cursoAngular';
  public mostrarVideojuego: boolean;
  public descripcion: string;
  public config: any;
  

  constructor(){
    this.mostrarVideojuego = true;
    this.title = Configuracion.titulo
    this.descripcion = Configuracion.descripcion
    this.config = Configuracion
  }

  ocultarVideojuego(value){
    this.mostrarVideojuego = value
  }
}

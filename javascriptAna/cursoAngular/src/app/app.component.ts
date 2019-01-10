import { Component } from '@angular/core';
import { Configuracion } from './model/configuracion'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso Angular de Ana Navarro';
  public descripcion: string;
  public config;
  public mostrarVideojuego: boolean = true;

  constructor(){
    this.title = Configuracion.titulo
    this.descripcion = Configuracion.descripcion
    this.config = Configuracion;
  }

  ocultarVideojuego(value){
    this.mostrarVideojuego = value
  }

}

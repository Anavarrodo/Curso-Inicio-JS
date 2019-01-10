import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { videojuegoComponent } from './videojuego/videojuego.component';
import { ropaComponent } from './ropa/ropa.component';


@NgModule({
  declarations: [
    AppComponent,
    videojuegoComponent,
    ropaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

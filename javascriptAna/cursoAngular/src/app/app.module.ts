import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { videojuegoComponent } from './videojuego/videojuego.component';
import { ropaComponent } from './ropa/ropa.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    videojuegoComponent,
    ropaComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [
   appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

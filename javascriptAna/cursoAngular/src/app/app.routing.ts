// IMPORTAR MODULOS DEL ROUTER

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTAR COMPONENTES

import { VideojuegoComponent } from './videojuego/videojuego.component';
import { RopaComponent } from './ropa/ropa.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';


// ARRAY DE RUTAS

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/:nombre/:followers', component: HomeComponent},
  {path: 'videojuego', component: VideojuegoComponent},
  {path: 'ropa', component: RopaComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'externo', component: ExternoComponent},

  {path: '**', component: HomeComponent}
]

//EXPORTAR EL MODULO DEL ROUTER

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
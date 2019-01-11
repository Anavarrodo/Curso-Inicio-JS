// IMPORTAR MODULOS DEL ROUTER

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTAR COMPONENTES

import { HomeComponent } from './home/home.component';
import { ropaComponent } from './ropa/ropa.component';
import { videojuegoComponent } from './videojuego/videojuego.component';

// ARRAY DE RUTAS

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'home/:nombre', component: HomeComponent},
    {path: 'home/:nombre/:followers', component: HomeComponent},
    {path: 'ropa', component: ropaComponent},
    {path: 'videojuego', component: videojuegoComponent},
    {path: '**', component: HomeComponent}

];

//EXPORTAR EL MODULO DEL ROUTER

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
import { Component, OnInit } from '@angular/core';
import { Vestido } from '../models/vestido';
import { RopaService } from '../service/ropa.service';

@Component({
    selector: 'ropa',
    templateUrl: './ropa.component.html',
    providers: [
        RopaService
    ]
})

export class RopaComponent implements OnInit{
    public titulo: string;
    public vestidos: Array<Vestido>
    public marcas: String[]
    public color: string
    public miMarca: any;
    

    constructor(
        private _ropaService: RopaService
    ){
        this.titulo = "Ropa de Temporada"
        this.marcas = []
        this.color = 'pink'
       
    }

    ngOnInit(){
        this.vestidos = this._ropaService.getVestidos()
        console.log(this._ropaService.getPrueba())
        this.getMarcas()
        this.getMarca()
    }

    getMarcas(){
        this.vestidos.forEach(element=>{
            if(this.marcas.indexOf(element.marca) < 0){
            this.marcas.push(element.marca)
            }
           
        })
        console.log(this.marcas)
        
    }
    
    getMarca(){
        console.log(this.miMarca)
    }

    addMarca(){
        this.marcas.push(this.miMarca)
    }

    borrar(index){
        this.marcas.splice(index, 1)
    }

}
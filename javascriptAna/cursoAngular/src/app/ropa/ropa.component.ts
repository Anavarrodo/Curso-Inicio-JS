import { Component, OnInit } from '@angular/core';
import { Vestido } from '../model/vestido';
import { ropaService } from '../service/ropa.service';

@Component({
    selector: 'ropa',
    templateUrl: './ropa.component.html',
    providers: [ropaService]
    
})

export class ropaComponent implements OnInit{
    public titulo: string;
    public vestidos: Array<Vestido>
    public marcas;
    public color: string;
    public miMarca: string;

    constructor(
        private _ropaService: ropaService
    ){
        this.titulo = "Marcas, Precios y stockaje!!";
        this.color = 'brown';
        this.marcas = new Array();
    }

    ngOnInit(){
        this.vestidos = this._ropaService.getVestidos()
        //alert(this._ropaService.getPrueba())
        this.getMarca()
    }

    getMarca(){
        this.vestidos.forEach((element, index) => {
            if(this.marcas.indexOf(element.marca) < 0){
                this.marcas.push(element.marca)
            }
        })
        console.log(this.marcas)
    }

    getMarcas(){
        console.log(this.miMarca)
    }

    addMarcas(){
        this.marcas.push(this.miMarca)
    }

    borrarMarca(index){
        this.marcas.splice(index, 1)
    }

    onBlur(){
        console.log("Blur ejecutado, hemos salido del input")
    }
}
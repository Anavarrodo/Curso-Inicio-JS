import { Component, OnInit } from '@angular/core';
import { Vestido } from '../model/vestido';

@Component({
    selector: 'ropa',
    templateUrl: './ropa.component.html'
})

export class ropaComponent implements OnInit{
    public titulo: string;
    public vestidos: Array<Vestido>
    public marcas;
    public color: string;
    public miMarca: string;

    constructor(){
       
        this.titulo = "Marcas, Precios y stockaje!!";
        this.color = 'brown';
        this.marcas = new Array();
        this.vestidos = [
            new Vestido("Guess", 185.90, "Rojo", "Ajustado", true),
            new Vestido("Calvin Klein", 285.00, "Blanco", "Cocktel", false),
            new Vestido("Purificacion Garcia", 145.99, "Beig", "Largo", true),
            new Vestido("Asos", 15.95, "Estampado", "Playero", true),
            new Vestido("Zara", 35, "Negro", "Fiesta", true),
            new Vestido("Calvin Klein", 390, "Negro", "Lentejuelas", false),
            new Vestido("Guess", 88.90, "Rosa", "Corto", true),
        ]
    }

    ngOnInit(){
        console.log(this.vestidos)
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
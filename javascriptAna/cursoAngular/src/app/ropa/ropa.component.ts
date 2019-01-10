
import { Component, OnInit } from '@angular/core';
import { Vestido } from '../models/vestido';

@Component({
    selector: 'ropa',
    templateUrl: './ropa.component.html'
})

export class ropaComponent implements OnInit{
    public titulo: string;
    public vestidos: Array<Vestido>;
    public marcas: Array<string>


    constructor(){
        this.titulo = "Prendas y Stock";
        this.marcas = new Array();
        this.vestidos = [
            new Vestido('Guess', "Drapeado", 99.99, "Negro", true),
            new Vestido('Guess', "Ajustado", 115, "Plateado", false),
            new Vestido('Asos', "Playero", 15.95, "Blanco", true),
            new Vestido('Asos', "Fiesta", 75.95, "Dorado", true),
            new Vestido('Calvin Klein', "Cocktel", 250, "Rojo", false),
            new Vestido('Purificacion García', "Fiesta", 650, "Rosa", true),
            new Vestido('Zara', "Kaftan", 9.99, "Rosa", true)
        ]
    }

    ngOnInit(){
        console.log(this.vestidos)
        this.getMarca();
     
    }

  
    getMarca(){

        this.vestidos.forEach(element => {
            if(this.marcas.indexOf(element.marca) < 0){
                this.marcas.push(element.marca)
            }
            
        })

        console.log(this.marcas)
    }
 

   
}
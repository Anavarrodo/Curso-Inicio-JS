import { Injectable } from '@angular/core';
import { Vestido } from '../model/vestido';

@Injectable()

export class ropaService{
    public vestidos: Array<Vestido>
    constructor(){
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

    getPrueba(){
        return "Hola desde Service"
    }

    getVestidos(){
        return this.vestidos
    }
}
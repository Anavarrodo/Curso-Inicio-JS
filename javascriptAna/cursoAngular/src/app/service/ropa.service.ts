import { Injectable } from '@angular/core';
import { Vestido } from '../models/vestido';

@Injectable()

export class RopaService {
    public vestidos: Array<Vestido>

    constructor(){
        this.vestidos = [
            new Vestido("Guess", 99.99, "Ajustado", true, "Plateado"),
            new Vestido("Purificación García", 250, "Cocktel", true, "RosaPastel"),
            new Vestido("Calvin Klein", 300, "Corte media pierna", false, "Azul bebé"),
            new Vestido("Asos", 15.99, "Playero", true, "Blanco"),
            new Vestido("Zara", 25.90, "Pichi", true, "Vaquero"),
            new Vestido("Guess", 450, "Fiesta",false, "Dorado"),
            new Vestido("Calvin Klein", 600, "Fiesta", true, "Negro")
        ]
    }

    getPrueba(){
        return "Hola desde Servicios"
    }
    getVestidos(){
        return this.vestidos
    }
}
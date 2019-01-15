import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculadora'
})

export class CalculadoraPipes implements PipeTransform {

    transform(value: any, value_two: any){
        let operaciones = `
            suma: ${value + value_two} - 
            resta: ${value - value_two} -
            multipliación: ${value * value_two} - 
            división: ${value / value_two}
        `
        return operaciones
    }

}
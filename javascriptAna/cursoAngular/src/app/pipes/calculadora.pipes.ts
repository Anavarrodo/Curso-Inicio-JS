import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculadora'
})

export class CalculadoraPipes implements PipeTransform {
    
    // dato | calculadora: dato2
    //  value | calculadora: value_two
    transform(value, value_two){
        let operaciones = `
            suma: ${value+value_two} - 
            resta: ${value-value_two} -
            multiplicación: ${value*value_two} -
            división: ${value/value_two}
        `;

        return operaciones
    }

}
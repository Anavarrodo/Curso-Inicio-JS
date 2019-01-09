
interface cocheBase{
    setColor(color);
    getColor();
    setModelo(modelo)
    getModelo()
    getVelocidad()
}


class Coche implements cocheBase{
    public color: string
    public modelo: string
    public velocidad: number

    constructor(modelo = null){
        this.color = "Rojo"
        this.velocidad = 150
        if(modelo == null){
            this.modelo = "Opel Astra"
        }else{
            this.modelo = modelo
        }
        
    }

    public getColor(){
        return this.color
    }

    public setColor(color:string){
        this.color = color
    }

    public getModelo(){
        return this.modelo
    }

    public setModelo(modelo:string){
        this.modelo = modelo
    }

    public acelerar(){
        return this.velocidad++
    }

    public frenar(){
        return this.velocidad--
    }
    
    public setVelocidad(velocidad){
        this.velocidad = velocidad
    }

    public getVelocidad(){
        return this.velocidad
    }
}

var astra = new Coche()
console.log(astra)


console.log("El modelo de mi Coche es: " + astra.getModelo())
astra.acelerar()
astra.acelerar()

console.log("La velocidad del Astra es " + astra.getVelocidad())

astra.frenar()

console.log("La velocidad del Astra despues de frenar es " + astra.getVelocidad())
console.log("El color del Astra es " + astra.getColor())

/*
var audi = new Coche()
var mercedes = new Coche()
audi.setColor("Negro")
mercedes.setColor("Blanco")
console.log("El color del Audi es " + audi.getColor())
console.log("El color del Mercedes es " + mercedes.getColor())
*/

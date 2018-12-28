
interface CocheBase{

    getColor()
    getModelo()
    getVelocidad()
}

class Coche implements CocheBase{
    public color: string;
    public modelo: string;
    public velocidad: number;

    constructor(modelo = null){
        this.color = "Rosa Plateado"
        this.velocidad = 100
        if(modelo == null){
            this.modelo = "BMV"
        }else{
            this.modelo = modelo
        }
       
    }

    public setModelo(modelo){
        this.modelo = modelo
    }

    public getModelo(){
        return this.modelo
    }

    public setColor(color){
        this.color = color
    }

    public getColor(){
        return this.color
    }

    public acelerar(){
        this.velocidad++
    }

    public frenar(){
        this.velocidad--
    }

    public getVelocidad(){
        return this.velocidad
    }
}

var coche = new Coche("Opel Astra")
console.log("El modelo de coche es: " + coche.getModelo())

coche.acelerar()
coche.acelerar()
coche.acelerar()

console.log("La velocidad de coche acelerando es: " + coche.getVelocidad())
coche.setColor("Rojo")
coche.frenar()
coche.frenar()
console.log("La velocidad de coche frenando es: " + coche.getVelocidad())
console.log("El color de coche es: " + coche.getColor())

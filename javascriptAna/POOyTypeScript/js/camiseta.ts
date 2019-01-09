// INTERFAZ (Es un contrato con unas propiedades y/o metodos establecidos que debe cumplir la clase)
interface camisetaBase{
    setColor(color);
    getColor();
}
//CLASE(molde del objeto)
class Camiseta implements camisetaBase{

    //PROPIEDADES (caracteristicas del objeto)
    public color : string
    public talla : string
    public marca : string
    public precio : number
    public modelo : string

    //METODOS (funciones que ejecuta el objeto)
    //CONSTRUCTOR (primer metodo que creamos siempre y se usa para instanciar las variables, darle valor a las propiedades)
    constructor(color, talla, marca, precio, modelo){
        this.color = color
        this.talla = talla
        this.marca = marca
        this.precio = precio
        this.modelo = modelo
    }

    public setColor(color){
        this.color = color
    }

    public getColor(){
        return this.color
    }

}

// CLASE HIJA
class Sudadera extends Camiseta{

    public capucha : boolean

    setCapucha(capucha:boolean){
        this.capucha = capucha
    }

    getCapucha():boolean{
        return this.capucha
    }
}

var sudaderaGuess = new Sudadera("Gris", "M", "Guess", 150, "Manga Larga")
sudaderaGuess.setCapucha(true)
sudaderaGuess.talla = "S"

console.log(sudaderaGuess)

var camiseta = new Camiseta("Rojo", "XS", "Guess", 85.99, "Manga corta")
camiseta.setColor("Rosa")


console.log(camiseta)
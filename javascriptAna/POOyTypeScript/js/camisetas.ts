//El nombre del archivo debe ser igual a la clase.
//las propiedades puedes ser públicas. Para que puedan ser utilizadas fuera de la clase
//CONTRUCTOR: METODO DENTRO DE UNA CLASE PARA DARLE UN VALOR INICIAL A LAS PROPIEDAS DEL OBJETO AL CREARLO
// Clase (molde del objeto)
class Camiseta {
    //Propiedades (características del objeto)
    public color: string;
    public modelo: string;
    public talla: string;
    public marca: string;
    public precio: number;

    //Métodos (funciones o acciones del objeto)

}

var camiseta = new Camiseta();
camiseta.color = "Rosa";
camiseta.modelo = "cuello vuelto",
camiseta.talla = "XS",
camiseta.marca = "Guess",
camiseta.precio = 15

var fiesta = new Camiseta();
fiesta.color = "Negro",
fiesta.modelo = "lentejuelas",
fiesta.talla = "S",
fiesta.marca = "Uterque",
fiesta.precio = 50

console.log(camiseta, fiesta)

////////////////////////////////////////////////////////////////////////////

//con propiedades privadas:
class Vestidos {
    //Propiedades (características del objeto)
    private color: string;
    private modelo: string;
    private talla: string;
    private marca: string;
    private precio: number;

    //Métodos (funciones o acciones del objeto)
    constructor(color, modelo, talla, marca, precio){
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.marca = marca;
        this.precio = precio;
    }
    public setColor(color){
        this.color = color
    }
    public getColor(color){
        return this.color
    }
}

var vestidoLargo = new Vestidos("Rosa", "Drapeado", "XS", "Guess", 69)
vestidoLargo.setColor("Rosa Brillante")

console.log(vestidoLargo)



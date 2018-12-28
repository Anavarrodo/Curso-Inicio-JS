var bicicleta = {
    color: "Rosa",
    modelo: "BMX",
    tipoFrenos: "de discos",
    velMax: "60km/h",
    cambiarColor: function(nuevoColor){
        this.color = nuevoColor
        console.log(this)
    }
}

console.log(bicicleta)
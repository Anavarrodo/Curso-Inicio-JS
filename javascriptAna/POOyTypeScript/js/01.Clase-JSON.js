console.log("CLASES JSON")

var bicicleta = {
    color: 'Rosa',
    modelo: 'BMX',
    frenos: 'de disco',
    velocidad: '60km/h',
    cambiaColor: function(nuevoColor){
        this.color = nuevoColor
        console.log(this)
    }
}

bicicleta.cambiaColor('azul')

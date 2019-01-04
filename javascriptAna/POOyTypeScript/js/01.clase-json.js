
//EN JS PARA CREAR CLASES SE PUEDE HACER CON PROTOTYPE (MUCHO JALEO) O ASÍ:

var bicicleta = {
    color : "Rojo",
    modelo : "BMX",
    frenos : "de Disco",
    velMax : "60km/h",
    cambiarColor: function(color){
        this.color = color
        console.log(this)
    }
}

bicicleta.cambiarColor()
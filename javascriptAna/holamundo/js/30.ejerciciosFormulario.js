'use strict'
window.addEventListener('load', function(){
var formulario = document.querySelector("#formulario")

//CREAMOS LA VAR CAJA Y LE INDICAMOS QUE NO APAREZCA POR DEFECTO
var caja = document.querySelector(".dashed")
caja.style.display = "none"

//AÑADIMOS SUBMIT PARA QUE PODAMOS ENVIAR EL FORMULARIO
formulario.addEventListener('submit', function(){
    console.log("submit")

var nombre = document.querySelector("#nombre").value
var apellidos = document.querySelector("#apellidos").value
var edad = Number(document.querySelector("#edad").value)

caja.style.display = "block"

//VALIDACION DEL FORMULARIO
if(nombre.trim() == null || nombre.trim().length == 0){
    document.querySelector("#error_nombre").innerHTML = "Error!!"
    alert("El nombre introducido no es válido")
    caja.style.display = "none"
    return false;
}else{
    document.querySelector("#error_nombre").style.display = "none"
}

if(apellidos.trim() == null || apellidos.trim().length == 0){
    document.querySelector("#error_apellidos").innerHTML = "Error!!"
    alert("El apellido introducido no es válido")
    caja.style.display = "none"
    return false;
}else{
    document.querySelector("#error_apellidos").style.display = "none"
}


if(edad == null || edad <= 0 || isNaN(edad)){
    document.querySelector("#error_edad").innerHTML = "Error!!"
    alert("La edad introducida no es válida")
    caja.style.display = "none"
    return false;
}else{
    document.querySelector("#error_edad").style.display = "none"
}


//ESTA ES OTRA FORMA DE QUE APAREZCAN LOS DATOS DENTRO DE LA CAJA
var p_nombre = document.querySelector("#p_nombre span")
var p_apellidos = document.querySelector("#p_apellidos span")
var p_edad = document.querySelector("#p_edad span")

p_nombre.innerHTML = nombre;
p_apellidos.innerHTML = apellidos;
p_edad.innerHTML = edad;

/*
---> ESTA ES UNA FORMA DE QUE APAREZCA EN LA CAJA
var datosUsuario = [nombre, apellidos, edad]
var indice;
for(indice in datosUsuario){
    var parrafo = document.createElement('p')
    parrafo.append(datosUsuario[indice])
    caja.append(parrafo)
}
*/

//QUE APAREZCA LA CAJA CUANDO PULSEMOS SUBMIT

    return false;
})

})
'use strict'

//metodo FETCH (peticiones AJAX) - se usa para hacer peticiones AJAX (que hace una llamada a un API rest)
//peticiones a serivicios /API rest
/*
metodo fetch --> accede a unos datos remotos y hace la peticion
se queda a la espera de que (.then) recibamos esos datos lo conviertamos a JSON
*/
var divAna = document.querySelector("#ana")
var divEve = document.querySelector("#eve")
var divUsuarios = document.querySelector("#usuarios")
//var usuarios = []

    getUsuarios()
    .then(data => data.json())
    .then(user => {
        //usuarios = user.data
        //console.log(usuarios)
        listadoUsuarios(user.data)

        return getAna()
    })
    .then(data => {
        //console.log(data)
        divAna.innerHTML = data

        return getEve()
    })
    .then(data => data.json())
    .then(eve =>{
        mostrarEve(eve.data)  
    })
    .catch(error =>{
        console.log(error + " error!!!!")
    })
    
  
function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=4')
}

function getEve(){
    return fetch('https://reqres.in/api/users/4')
}

function mostrarEve (user){
    let nombre = document.createElement('h3')
    let foto = document.createElement('img')
    foto.src = user.avatar
    nombre.innerHTML = user.first_name + " " + user.last_name
    divEve.append(nombre)
    divEve.append(foto)
    document.querySelector("#eve .loading").style.display = "none"
    
}

function listadoUsuarios (usuarios){
    usuarios.map((user, i) =>{
        let nombre = document.createElement('h3')
        nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name
        divUsuarios.append(nombre)
        document.querySelector(".loading").style.display = "none"
    })
}

function getAna(){
    
    var ana = {
        nombreCompleto: "Ana Navarro",
        estadoCivil: "Casada",
        nombreMarido: "Pedro de la Fuente",
        hijos: 0
    }
    
    return new Promise((resolve, reject) => {
        var anaString = ""
        setTimeout(function(){
            anaString = JSON.stringify(ana)
            if(typeof anaString != "string" || anaString == ""){
                return reject('error')
            }else{
                return resolve(anaString)
            }
        }, 3000)
        
        
    })

    
}
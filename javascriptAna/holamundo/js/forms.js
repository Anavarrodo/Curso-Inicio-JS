'use strict'

var url = 'http://localhost:8080/api/personas';
var method = "GET"
function testResults (form) {
    var persona = {name: form.nombre.value, surname: form.apellido.value, age: form.edad.value};
    console.log("User name----> "+persona.name)
    console.log("User Surname-> "+persona.surname)
    console.log("user age-----> "+persona.age)
document.write("<h2> Hola "+persona.name+" "+persona.surname+" tienes una edad de "+persona.age+" años </h2>")    
}

function createCORSRequest(){
    if ("withCredentials" in xhr) {
  
      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.open(method, url, true);
  
    } else if (typeof XDomainRequest != "undefined") {
  
      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
      xhr = new XDomainRequest();
      xhr.open(method, url);
  
    } else {
  
      // Otherwise, CORS is not supported by the browser.
      xhr = null;
  
    }
    return xhr;
  }
  

  


function callBackend(){
    var request = new XMLHttpRequest();
    var result = [];
    console.log("Elementos--->"+result.length)
    // Open a new connection, using the GET request on the URL endpoint
    request.open(method, url, true);
    
    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response);

    data.forEach(movie => {
      // Log each movie's title
      var person = {name : movie.name, surname : movie.surname, age : movie.age}
      result.push(person)
      console.log(person);
     
      
    });
    console.log("Elementos--->"+result.length)
    pintarPersonas(result)
      }
    
    // Send request
    request.send();
    console.log("Llamada---> "+request)
    
}

function pintarPersonas(result){
    
    document.write("<h1> La familia de la Fuente Navarro la componen "+result.length+" personas</h1>")
    result.forEach(element => {
        console.log("Pintando---> "+element);
        document.write("<h2>Nombre "+element.name+"</h2>")
        document.write("<h2>Apellido "+element.surname+"</h2>")
        document.write("<h2>Edad "+element.age+"</h2>")
    });
}



if(esMayorAQueB(10,5)){

    document.write("<h1> Me ejecuto!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>")
}else{
    document.write("<h1>--->NO<---- Me ejecuto!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>")    
}





function esMayorAQueB(a,b){
    if (a>b){
        return true;
    }else{
        return false;
    }

}
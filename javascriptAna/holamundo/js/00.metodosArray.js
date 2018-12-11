'use strict'
var peliculas = ["IT", "Como Dios", "Moulin Rouge", "A todo gas", "Alien"]
//AÑADIR ELEMENTOS AL ARRAY

                        //array.push("valor a añadir")
                        /*
                        peliculas.push("Batman")
                        console.log(peliculas)

                        var elemento = prompt("Introduce tus peliculas favoritas")
                        while(elemento != "salir"){
                            elemento = prompt("Introduce tus peliculas favoritas")
                            peliculas.push(elemento) 
                        }

                        console.log(peliculas)
                        */
                        //ELIMINAR EL ULTIMO ELEMENTO DEL ARRAY.
                        //array.pop()
                        /*
                        peliculas.pop()
                        console.log(peliculas)
                        */

//ELIMINAR UN ELEMENTO CONCRETO DE MI ARRAY

                        //array.splice(numero del indice a eliminar , numero de los elementos a eliminar , 
                        //elementos a añadir/sustuir)
                        //en nuestro ejemplo queremos eliminar el indice 2 y eliminar solo un elemento. si pusieramos (2,2),
                        //tambien se eliminaria A todo gas
                        /*
                        var indice = peliculas.indexOf("Moulin Rouge")
                        console.log(indice) // compruebo en qué posicion está mi elemento a eliminar
                        peliculas.splice(2, 1, "Titanic", "Crepusculo")
                        console.log(peliculas)
                        */

//CONVERTIR UN ARRAY A TEXTO

                        //var = array.join() //solo funciona dentro de una variable
                        /*
                        var arrayString = peliculas.join()
                        console.log(arrayString)
                        */

//ORDENAR UN ARRAY (ALFABETICAMENTE)

                        //array.sort()
                        /*
                        peliculas.sort();
                        console.log(peliculas)
                        */

//INVERTIR EL ARRAY

                        //array.reverse();
                        /*
                        peliculas.reverse();
                        console.log(peliculas)
                        */

//HACER BUSQUEDA DEL VALOR DENTRO DE UN ARRAY
                        /*
                        array.find(function(pelicula){
                            return pelicula == "pelicula a buscar"
                        })
                        */
                       /*
                        var pelicula;
                        var busqueda = peliculas.find(function(pelicula){
                            return pelicula == "Moulin Rouge"
                        })
                        console.log(busqueda)
                        */

//BUSQUEDA DEL INDICE DE UN VALOR DENTRO DE UN ARRAY
                        /*
                        array.findIndex(function(indice){
                            return indice == "pelicula a buscar"
                        })
                        */
                       /*
                        var indice;
                        var busqueda = peliculas.findIndex(function(indice){
                            return indice == "Moulin Rouge"
                        })
                        console.log(busqueda) // me saca 2 que es la posicion de moulin rouge
                        */

//ARRAY DE ENTEROS. BUSCA SI EL VALOR ES MAYOR, IGUAL, MENOR
                        /*
                        array.some(function(precio){
                            return precio >= numero a comparar
                        })
                        */
                       /*
                        var precios = [10, 20, 25, 30, 50, 80]
                        var busqueda = precios.some(function(precio){
                            return precio > 80 //me devuelve false
                        })
                        console.log(busqueda)
                        */
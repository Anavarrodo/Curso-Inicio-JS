'use strict'

//SABER QUE TIPO DE DATO ES - typeof

                                //typeof var
                                /*
                                var numero = 563
                                console.log(typeof numero) // number
                                */

//CONVERTIR UN ENTERO EN UN STRING - String() / .toString()

                                //String(var)
                                //var.toString()
                                /*
                                var numero = 215
                                console.log(typeof numero) // number
                                console.log(typeof String(numero)) // string
                                console.log(typeof numero.toString()) // string
                                */

//CONVERTIR UN TEXTO DE MINUSCULAS A MAYUSCULAS - .toUpperCase() / .toLowerCase()

                                //var.toUpperCase()
                                //var.toLwerCase()
                                /*
                                var texto = "Me gustan los gatos y el vino"
                                console.log(texto.toUpperCase()) // mayusculas
                                console.log(texto.toLowerCase()) // minusculas
                                */

//CALCULAR LONGITUD DE UN TEXTO - .length

                                //var.length
                                /*
                                var texto = "Me gustan los animales pequeñitos"
                                var array = ["perro", "gato", "gallo", "pollo", "potro", "liendre"]
                                console.log(texto.length) // mi texto tiene 33 letras
                                console.log(array.length) // mi array tiene 6 posiciones
                                */

//CONCATENAR - UNIR TEXTO 

                                /*
                                var nombre = "Ana Maria"
                                var apellidos = "Navarro Dominguez"
                                var textoCompleto = nombre + " " + apellidos
                                console.log(textoCompleto)
                                */

//BUSCAR UNA PALABRA DENTRO DE UN STRING - .indexOf() / .search() / .lastIndexOf()

                                //var.indexOf("palabra a buscar")    BUSCA LA PRIMERA COINCIDENCIA
                                //var.search("palabra a buscar")
                                /*
                                var texto = "Me gustan los animales pequeñitos pero que sean animales"
                                var texto2 = "Me gustan los gatos y el vino"
                                var buscar = texto2.indexOf("gatos")
                                var buscar2 = texto.search("animales")
                                console.log(buscar) // me dice que gato esta a partir del caracter 14
                                console.log(buscar2) // me dice que gato esta a partir del caracter 14
                                */
                                //var.lastIndexOf("palabra a buscar")       BUSCA LA ULTIMA COINCIDENCIA
                                /*
                                var buscarUltima = texto.lastIndexOf("animales")
                                console.log(buscarUltima) // me dice que animales esta a partir del caracter 48
                                */

//BUSQUEDA GLOBAL EN UN TEXTO - .match(/ /gi)

                                //var.match(/palabra a buscar/gi)       //ME DEVUELVE UN ARRAY DE ESAS PALABRAS CON TODAS SUS
                                                                        //COINCIDENCIAS
                                /*
                                var texto = "Me llamo Ana y Ana y Ana"
                                var buscar = texto.match(/Ana/gi)
                                console.log(buscar)     // ARRAY DE 3 POSICIONES
                                */

//BUSCAR UNA PALABRA A PARTIR DE MIS INDICACIONES - .substr(,)

                                //var.substr(numero de caracter a partir de la cual empieza a buscar , letras que quiero que
                                // me saque)
                                /*
                                var texto = "Me gustan los gatos y el vino"
                                var buscar = texto.substr(14, 4)
                                console.log(buscar)  //me saca gato
                                */

//SACAR UNA LETRA EN CONCRETO - .charAt()

                                //var.charAt(numero de caracter a partir de la cual empieza a buscar)
                                /*
                                var texto = "Me gustan los gatos y el vino"
                                var buscar = texto.charAt(14)
                                console.log(buscar) // me saca g
                                */

// BUSCAR COMO EMPIEZA/ACABA UN TEXTO - .startsWith() / .endsWith()

                                //var.startsWith("palabra o letras por la que empieza el texto") //te devolverá TRUE O FALSE
                                /*
                                var texto = "Me gustan los gatos y el vino"
                                var buscar = texto.startsWith("Me gustan")
                                */
                                //var.endsWith("palabra o letras por la que termina el texto")
                                /*
                                var buscar2 = texto.endsWith("el vino")
                                console.log(buscar2)
                                */

//BUSCAR SI UNA PALABRA EXISTE EN EL TEXTO - .includes()

                                //var.includes("palabra a buscar")      //te devolverá TRUE O FALSE
                                /*
                                var texto = "Me gustan los animales pequeñitos pero que sean animales"
                                var buscar = texto.includes("gustan")
                                console.log(buscar)
                                */

//REEMPLAZAR UN TEXTO POR OTRO - .replace( , )

                                //var.replace("palabra del texto que queremos modificar" , "por esta otra palabra")
                                /*
                                var texto = "Mi perra lola se tira muchos pedos"
                                var buscar = texto.replace("tira", "come")
                                console.log(buscar)
                                */

 //CORTAR/SEPARAR/ELIMINAR TEXTO - .slice()

                                //var.slice(numero del caracter a partir del cual queremos que nos pinte)
                                /*
                                var texto = "Mi perra lola se tira muchos pedos"
                                var buscar = texto.slice(9) // me pinta lola se tira muchos pedos
                                var buscar2 = texto.slice(9, 21) // me pinta lola se tira
                                console.log(buscar2)
                                */

//DESMEMBRAR UN TEXTO Y METERLO EN UN ARRAY - .split(" ")

                                //var.split(" ")<-- el espacio entre comillas es para que cada palabra del texto me lo
                                //meta en una posicion del array
                                /*
                                var texto = "Mi perra lola se tira muchos pedos"
                                var buscar = texto.split(" ") //(7) ["Mi", "perra", "lola", "se", "tira", "muchos", "pedos"]
                                console.log(buscar)
                                */

//ELIMINAR ESPACIOS  POR DELANTE Y AL FINAL DEL TEXO - .trim()

                                //var.trim()
                                /*
                                var texto = "   Mi perra lola se tira muchos pedos   "
                                var buscar = texto.trim() 
                                console.log(buscar)
                                */
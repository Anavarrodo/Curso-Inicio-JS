'use strict'

var fecha = new Date()
console.log(fecha)

//como sacar la fecha en la que estamos actualmente
var year = fecha.getFullYear()
var mes = fecha.getMonth()
var dia = fecha.getDate()
var hora = fecha.getHours()
var minuto = fecha.getMinutes()
var milisegundos = fecha.getMilliseconds()
var segundos = fecha.getSeconds()
var tiempo = fecha.getTime()


var textoFecha = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    El hora es: ${hora}
    El minuto es: ${minuto}
    El milisegundo es: ${milisegundos}
    El segundos es: ${segundos}
    El tiempo es: ${tiempo}
 
`
console.log(textoFecha)
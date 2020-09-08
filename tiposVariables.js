// tipos de variables

/*
un comentarios de varias lineas
*/

var nombre; //undefined
var cadena = 'carlos'; //string
var numero = 12;   // number
var boolean = true; // boolean (true o false)
var esNull = null; // null
var persona = { 
    nombre: 'pedro', 
    apellido: 'perez', 
    edad: 23, 
    nombre_completo: 'pedro perez' }; // object
var array = ['lunes', 'martes','miércole','jueves','viernes','sábado','Domingo'];
var array2 = [23,,34,54,12,4];
var array3 = [23, true , 'uno',{nombre:'carlos'},['uno','dos']];
var arrayTrabajadoresEmpresa = [
    { nombre: 'pedro',apellido: 'perez',edad: 23 },
    { nombre: 'Mari',apellido: 'Sancez',edad: 23 },
    { nombre: 'Toño',apellido: 'Ruiz',edad: 23 }
];

//console.log(arrayTrabajadoresEmpresa[0].edad);
//console.log(array3);
console.log(array3[4][1]);

console.log(arrayTrabajadoresEmpresa[2].nombre +' '+ arrayTrabajadoresEmpresa[2].apellido);

/*
console.log(typeof(nombre));
console.log(typeof(cadena));
console.log(typeof(numero));
console.log(typeof(boolean));
console.log(typeof(esNull));
console.log(typeof(persona));
console.log(typeof(array));
console.log(persona.nombre);
console.log(persona);
console.log(array);
*/



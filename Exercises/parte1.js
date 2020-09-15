

// si vamos hacer un ejercicio que
// creamos el array y luego se lo pasamos a la función como paremtro



//5. Leer tres calificaciones de un alumno y determinar su promedio

function calificacionesAlumno (cal1,cal2,cal3){
var calificacionPromedio  = ((cal1+cal2+cal3)/3).toFixed(2);
 console.log(calificacionPromedio);
}

calificacionesAlumno(3.5,4.2,5.0);

// 6. En un almacén se hace un 20% de descuento a los clientes cuya compra 
// supere los $1,000 ¿cuál será la cantidad que pagará una persona por su compra?


function descuento(valorCompra){
if (valorCompra > 1000) {
  
  var descuento = (valorCompra * 0.2);
  var valorAPagar = (valorCompra - descuento);
  console.log('El valor de su compra es de: '+valorCompra+' y tiene un descuento de: '+descuento);
  console.log('Su total a pagar es de: '+valorAPagar);

} else {
  var valorAPagar = valorCompra;
  console.log('Su total a pagar es de: '+valorAPagar);
}

}
descuento(1050);



//7. Leer dos números enteros, restar el menor del mayor y mostrar el resultado.
function numeroEnteros(numero1,numero2,resultado) {    

    if (numero1 > numero2) {

      resultado =  numero1 - numero2;
      console.log('El Resutado de la resta de los números es: '+resultado)  

    } else {
        
       resultado = numero2 -numero1;
     console.log('El Resutado de la resta de los números es: '+resultado)
    }
} 

numeroEnteros(23,40,0);


//8. Leer dos números si el primero es mayor mostrar la 
//Resta de los dos números, por otro lado si el segundo es mayor mostrar la suma de ambos,

function leerDosNumeros(num1,num2){

    if (num1 > num2) {
      var resta = (num1 - num2);
      console.log('La resta es: '+resta);
    } else {
      var suma = (num1 + num2);
    }

}
leerDosNumeros(75,15);



// 9. Diseñe un algoritmo que lea tres números y los imprima de mayor a menor

function leerTresNumeros(n1,n2,n3){

  if (n1>n2 && n2>n3 )  {
    
    console.log('El mayor es: '+n1);
    console.log('El del medio es: '+n2);
    console.log('El menor es: '+n3); 

  } else if (n1>n3 && n3>n2) {
    console.log('El mayor es: '+n1);
    console.log('El del medio es: '+n3);
    console.log('El menor es: '+n2); 

  } else if (n2>n1 && n1>n3) {
    
    console.log('El mayor es: '+n2);
    console.log('El del medio es: '+n1);
    console.log('El menor es: '+n3); 

  } else if (n2>n3 && n3>n1) {
    console.log('El mayor es: '+n2);
    console.log('El del medio es: '+n3);
    console.log('El menor es: '+n1); 
    
  } else if (n3>n1 && n1>n2) {
    console.log('El mayor es: '+n3);
    console.log('El del medio es: '+n1);
    console.log('El menor es: '+n2); 


  } else if (n3>n2 && n2>n1) {
    console.log('El mayor es: '+n3);
    console.log('El del medio es: '+n1);
    console.log('El menor es: '+n2); 
  } else {
  
  console.log('Hay números iguales');  
  }

}

leerTresNumeros(10,7,96);

// 10. Elabora un algoritmo que solicite la edad y nombre de dos hermanos y 
//muestre indicando la edad y nombre del mayor y cuantos años de diferencia tiene con el menor.

    //console.log(hermanos); Imprime los datos del array
    //console.log(hermanos[0]); Imprime los datos del primer dato del array
    ///console.log(hermanos[0].edad);
    //return hermanos[0].edad;

function determinaMayor(hermanos){

    if (hermanos[0].edad > hermanos[1].edad) {

       diferencia = hermanos[0].edad - hermanos[1].edad;
       
       return hermanos[0].nombre+' Es el mayor con '+hermanos[0].edad+' y una diferencia de '+diferencia+ ' años' ;
    
    } else if (hermanos[1].edad > hermanos[0].edad) {
      diferencia = hermanos[1].edad - hermanos[0].edad;

      return hermanos[1].nombre+' Es el mayor con '+diferencia+' años de diferencia' ;
    } else {
    
     return console.log('Tienen la misma edad');
   }
}

var hermanos = [{nombre:'Juan',edad:30},{nombre:'pepito',edad:30}];
console.log(determinaMayor(hermanos));

// me falta colocar cúand son iguales en edad




//var alumno = {asistencia = '80', calificacion = 3.5};

/*
function alumno(){
 if(){
     
 }   
}
*/
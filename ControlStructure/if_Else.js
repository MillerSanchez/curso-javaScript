var mostrarMensaje = true; // boolean

if(mostrarMensaje === true){
  console.log("Hola Mundo");
}


var numero = 1;

if (numero == 1){
    console.log(numero);
}

// ==
var numero = '1';

if (numero == 1){
    console.log(numero);
}

// === se recomienda para comparar
// == realiza conversiones para comparar(No es recomendable)

var numero = '1';

if (numero === 1){
    console.log(numero);
} else{
    console.log('no es uno')
}


var edad = 18;

if (edad >= 18) {
 console.log("Eres mayor de Edad");
    
} else {
    console.log("Todavía eres menor de edad")    
}


var edad = 18;

if (edad < 12) {
    console.log("Todavía eres muy pequeño");
} else if(edad < 19) {
    console.log("Eres un adolescente");
} else if(edad < 35) {
    console.log("Aún sigues siendo joven");
}else{
    console.log("Piensa en cuidarte un poco más");
}




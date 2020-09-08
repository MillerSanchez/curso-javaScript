//function square(number){
//    return number * number;
//}

/*square(2);
console.log(square(2));
*/
// Muestra el cuadrado 


function message(){
    return "hola mundo";
}
// Imprime: hola mundo
//console.log( message());



function messageThree(name){
    return `hola ${name}`; 
}

// Para concatenar
//console.log(messageThree('soy Miller'));

function messageThree(name){
    return `hola ${name}, yo se que tu tienes ${20 + 3} años`; 
}

// Para concatenar
console.log(messageThree('soy Miller'));




function messageCinco(name){
    return `hola ${name}, yo se que tu tienes ${square(3)} años`; 
}
function square(number){
    return number * number;
}
// Para concatenar
console.log(messageCinco('soy Miller'));




//enviar parametro por funciones
function messageThree(name, number){
    return `hola ${name}, yo se que tu tienes ${ square(number)} años`; 
}
function square(number){
    return number * number;
}
// Para concatenar
console.log(messageThree('Maria',4));




function messageCuatro(name){
    return "hola " + name; 
}

// otra forma de concatenar
console.log( messageCuatro('Pepito Perez'));


function showFullName(user){
    return `hola ${user.name}  ${user.lastname}`;
}

console.log( showFullName({ name:'maria', lastname: 'gomez'}));




function showFullNameArray(users){
    return `hola ${users[0].name}  ${users[0].lastname}`;
}

var users = [{ name:'maria', lastname: 'gomez'}];
// Cuúando no está en un corchete es un arrary
console.log( showFullNameArray(users));


function sum(num1,num2){
    return num1 + num2;
}

console.log( sum(2,5));

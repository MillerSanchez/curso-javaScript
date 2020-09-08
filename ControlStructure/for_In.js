/*

for (propiedad in object){


}
*/
// Lista
var dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

for(i in dias){
    console.log(dias[i]);
}//imprime el día de cada posición


// Object
var user = {name:'carlos', edad:34};
for(i in user){
    console.log(user[i]);
}//imprime cada caracteristica del objeto


// Object
var user = {name:'carlos', edad:34};
for(i in user){
    console.log(`user: ${i} = ${user[i]}`);
}//imprime cada caracteristica del objeto


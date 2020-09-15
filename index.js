

//Alcance -ambito - scope =>

baz();
sum();


var nombre= 'pepito':
function baz(){

}
console.log(foo); // foo is not define


var sum = function(num1,num2){
    return num1 + num2;
}

//cadena de alcance

function b(){
    console.log(myVar);
}

function a(){
    var myVar = 2;
    b();
}

var myVar = 1;
a(); //1




var myObject = {
    name: 'Bruce Object',
    me: function (){
        this.name = 'Joker Object';
        console.log(this)
    }
}

myObject.me();


var myObject = {
    name: 'Bruce Object',
    me: function (){
        this.name = 'Joker Object';
        console.log(this);

         
        var setName = function(name){
            this.name = name;
        }
        setName('Robin Object');
        console.log(this);// {name: 'Joker Object', me:[Function: me]}        
 
    }
}

myObject.me();





var myObject = {
    name: 'Bruce Object',
    me: function (){
        this.name = 'Joker Object';
        console.log(this);

       var self = this;         
        var setName = function(name){
        self.name = name;
        }
        setName('Robin Object');
        console.log(self);// {name: 'Joker Object', me:[Function: me]}        
 
    }
}

myObject.me();




//


function foo(){
this.baz = 'hello';
console.log(this);
}

function bar(){

}


//function register(name,lastname,age)
function register(){
//    console.log(name,lastname,age)
console.log(arguments)

}

register();//undefined undefined undefined
register('Bruece'); // Bruce undefine undefined
register('Bruece','Wayne');// Bruece Wayne undefined
register('Bruece','Wayne',88);// Bruce Wayne 88

function register(){
    console.log(arguments);
}

//Llamar función inmediatamente

var myFunc = function(name){
    console.log(name);
}('Bruce');

var name = 'Camilo';
var myFunc = function(name){
    console.log(name);
}(name);

var name = 'Bruce';
(function(name){
    console.log(name);
})(name);//Bruce

var name = 'Camilo';
function (name) = function(name){
    console.log(name);
}('Bruce');



//Closures

function welcome(id){
    return function () {
        console.log('hello' + id);
    }
}

var greet = welcome('bruce');
console.log(greet);
greet();


/*var users =[
    {email: 'mario@maria.com'},{email: 'camilo@camilo.com'},{email: 'juano@juan.com'}
]
*/
var users =['mario@maria.com','camilo@camilo.com','juano@juan.com']


function getProperty(property){
    return function(object){
        return object[property];
    }
   }


   var userEmail = getProperty(1);
   console.log(userEmail(users));
   


var user = {
    name: 'camilo',
    lastname: 'restrepo',
    email: 'camilo@camilo.com'
}


function getProperty(property){
 return function(object){
     return object[property];
 }
}

var userEmail = getProperty('email');
var userName = getProperty('name');
console.log(userEmail(user));
console.log(userName())




var users =[
    {email: 'mario@maria.com'},{email: 'camilo@camilo.com'},{email: 'juano@juan.com'}
]
//var users =['mario@maria.com','camilo@camilo.com','juano@juan.com']


function getProperty(property){
    return function(object){
        return object[property];
    }
   }


   var userEmail = users.map(getProperty('email'));
   console.log(userEmail);



   
   

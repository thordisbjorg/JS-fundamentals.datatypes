
//Variable assignment
var myFriends = "Stefan";

//array of strings
var myFriends = ["Stefan", "Frida", "Olafur"];

//output of string concatenations
console.log("I have" + myFriends.length + " friends ! ! !");

//output of Arithmetic Operations
var x = 100 * 10
console.log(x)

//Checking for truthy or falsy values 
null == undefined //true
null === undefined //false 
//Example
var a = "0";
var b = 0;
console.log(a == b); //true
console.log(a === b); //false

//Array with multiple values
var fruit1 = "apple";
var fruit2 = "banana";
var fruit3 = "kiwi";

var fruits = ["apple", "banana", "kiwi"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//Create an object
var person = "Sigga Magga"
//Adding preperties to an object
var person = { firstName: "Sigga", lastName: "Magga", age: 95, eyeColor: "green" };
//removing properties from an object
var person = {
    firstName: "Sigga",
    lastName: "Magga",
    age: 95,
    eyeColor: "green"
};

delete person.age;

//Math object
Math.PI; //returns 3.141592653589793

//Math.round()
Math.round(3.7); //returns 4
Math.round(3.4); //returns 3

//Output date and time using Date()
var d = new Date(2020, 10, 12, 10, 33, 30, 0); //year, month, day, hour, minute, second

//Strict mode
x = 3.14;
myFunction();

function myFunction() {
    "use strict";
    y = 3.14
}

//HTML DOM console.log() Method
console.log("Good Morning");







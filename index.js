//VARIABLES
// let age =20;
// let firstName = "David";
// let student = true;


// console.log("Hi, My name is "+firstName+ " I am " +age+ " Years old");
// console.log("Enroll status: ", student);

// document.getElementById("p1").innerHTML = "Terve! " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + " Years old.";
// document.getElementById("p3").innerHTML = "Your enroll status: " + student;

//ARITHMETIC EXPRESSIONS

// let students = 40;
// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// let extraStudents = students % 3;

// students +=1;     += this is called agumented assignment operator!!
// students -=1;
// students *=1;
// students /=1;



// console.log(students);

/* OPERATOR PRECEDENCE
    1. parenthesis ()
    2. exponents
    3. multiplications & division
    4. addition & substraction 
*/

/* let results = 1 + 2 * (3+4);
console.log(results); */


//USER INPUT...

//EASY WAY with a window prompt

// let username = window.prompt("What is your name? ");
// console.log(username);

//DIFFICULT WAY HTML textbox

/* let username;

document.getElementById("myButton").onclick= function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Morris! " +username;
} */



// TYPE CONVERSION...

// Type conversion = change the datatype of a value to another (string, numbers, booleans)

/* let age = window.prompt("How old are you? ")
age = Number(age);
age +=1;
console.log("Happy birthday! You are", age, "years old"); */

/* let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("");
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); */

//CONSTANTS

// const = a variable that can't be changed!

/* const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle: ")
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is : ", circumference); */



// JAVASCRIPT MATH...

// let x;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;
//x = Math.round(x);
//x = Math.floor(x);    //-> Math.floor function always round number down!!
// x = Math.ceil(x);    //-> Math.floor function always round number up!!
// x = Math.pow(x,2);     //-> raise value to the given power! (x,2) -> here x is base and 2 is exponential!
// x = Math.sqrt(x);     //-> square root of x
// x = Math.abs(x)              //absolute value is distance away from 0 (zero)!

/* maximum = Math.max(x,y,z);
minimum = Math.min(x,y,z); */

// x = Math.PI;

// console.log(x);


// Exercise: Hypotenuse calc practice program;

/* let a;
let b;
let c; */

/* a = window.prompt("Enter value of a: ");
a = Number(a);
b = window.prompt("Enter value of b: ");
b = Number(b);

c = Math.pow(a,2) + Math.pow(b,2);
c = Math.sqrt(c);

console.log("Side C is : ", c); */

/* document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
} */

// Exercise: Counter program

/* let Count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    Count -=1;
    document.getElementById("countLabel").innerHTML = Count;
}

document.getElementById("resetBtn").onclick = function(){

    Count = 0;
    document.getElementById("countLabel").innerHTML = Count;
}

document.getElementById("increaseBtn").onclick = function(){
    Count +=1;
    document.getElementById("countLabel").innerHTML = Count;
}
 */

//Exercise: Random Number generator

// let x = Math.floor(Math.random()*6) +1 ;  // 6 sided dice

/* let x;
document.getElementById("rollBtn").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;  // 6 sided dice
    document.getElementById("xLabel").innerHTML = x;
    console.log(x);
}; */

/* let a;
document.getElementById("rollButton").onclick = function(){

    a = Math.floor(Math.random() * 6) + 1;
    document.getElementById("alabel").innerHTML = a;
    
} */

/* let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
} */


// Useful STRING Properties and METHODS

/* let userName = "Aayush Bhattarai"
let phoneNumber = "123-45-678-9700"; */

/* console.log(userName.length);

let firstLetter = userName.charAt(0);      //-> Character of a string at given index
console.log(firstLetter);

console.log(userName.indexOf("B"));            //--> index of the first occurance of a letter
console.log(userName.lastIndexOf("a"));  */           //--> index of the last occurance of a letter

/* userName = userName = userName.trim();   //--> triming space before and after a string.
userName = userName.toUpperCase();       // --> Capitializ  given string
userName = userName.toLowerCase();  */      


/* phoneNumber = phoneNumber.replaceAll("-", "*")   //--> replacing given string into another one

console.log(phoneNumber); */



// SLICE METHOD ( String Slicing)

/* slice() extracts a section of a String
and returns it as a new String,
without modifying the original String.. */


let fullName = "Snoop Dog";

let firstName;
let lastName;

/* firstName = fullName.slice(0,6)
lastName = fullName.slice(7); */

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") +1);

console.log(firstName);
console.log(lastName);

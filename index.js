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


/* let fullName = "Snoop Dog";

let firstName;
let lastName; */

/* firstName = fullName.slice(0,6)
lastName = fullName.slice(7); */

/* firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") +1);

console.log(firstName);
console.log(lastName); */


//METHOD CHAINING
// => Calling one method after another in one continuous line of Code.

/* let userName = "aayush"

let letter = userName.charAt(0).toUpperCase();


console.log(letter); */

//IF STATEMENT
/* => basic form of decision making
if a condition is true, then do something
if Notification, then don't do it!!! */

/* 
let age = 66

if(age>=65){
    console.log("You are a senior citizen!!")
}
else if(age>=18){
    console.log("You are an adult!");
}
else if(age<0){
    console.log("You haven't been born yet!!");
}

else{
    console.log("You are a child!");
} */


/* let online = true;
if(online){
    console.log("You are online!!");

}
else{
    console.log("You are offline!!");
} */


//CHECKED PROPERTY exercise 1.
/* document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");

    if(myCheckBox.checked == true){
        console.log("You are subscribed");

    }
    else{
        console.log("You are not subscribed!!");
    }

} */

//CHECKED PROPERTY exercise 2.
/* document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked == true){
        console.log("You are subscribed");

    }
    else{
        console.log("You are not subscribed!!");
    }

    if(visaBtn.checked){
        console.log("You have selected Visa card as your payment method!");

    }
    else if(mastercardBtn.checked){
        console.log("You have selected mastercard as your payment method!");
    }

    else if(paypalBtn.checked){
        console.log("You have selected paypal as your payment method!");
    }
    else{
        console.log("You must select an payment type!! ");
    }
} */


//SWITCH STATEMENT
/* => statement that examines a value for
a match against many case clauses.
More efficient then using many "else if" statements */

//Exercise 1
/* let grade = "E";

switch(grade){
    case "A":
    console.log("You did great!");
    break;

    case "B":
        console.log("You did good!");
        break;

    case "C":
        console.log("You did okay!");
        break;

    case "D":
        console.log("You passed...barley!");
        break;

    case "E":
        console.log("You Failed!");
        break;
    default:
        console.log(grade, "is not a letter grade! (Invalid Input)")
} */

//Exercise 2

/* let grade = 80;

switch(true){
    case grade>=90:
    console.log("You did great!");
    break;

    case grade >= 80:
        console.log("You did good!");
        break;

    case grade >= 70:
        console.log("You did okay!");
        break;

    case grade >= 60:
        console.log("You passed...barley!");
        break;

    case grade > 60:
        console.log("You Failed!");
        break;
    default:
        console.log(grade, "is not a letter grade! (Invalid Input)")
} */


//AND OR Logical Operators:
//Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)


//&& exercise
/* let temp = 31;
if(temp > 0 && temp < 30){
    console.log("The weather is good!");
}else{
    console.log("The weather is bad!");
} */

// || exercise

/* let temp = 3;

if(temp <= 0 || temp >= 30){
    console.log("The weather is bad!")

}else{
    console.log("The weather is good!")
} */


//Exercise: using more operators

/* let temp = 11;
let sunny = false;

if(temp > 0 && temp < 30 && sunny ){
    console.log("The weather is good!");
}else{
    console.log("The weather is bad!");
} */

//NOT Logical Operator
//Typically used to reverse condition's boolean valuse
//True -> false         false -> true 

/* let temp = 1;
let sunny = true;
if(!(temp > 0)){
    console.log("It's cold outside!");

}
else{
    console.log("It's warm outside!");
}

if(!sunny){
    console.log("Its cloudy outside!");
}else{
    console.log("Its sunny outside!");
} */

//WHILE LOOP
//while loop= Repeat some code
/* while some condition is true
it could potential repeat infinite amount of time */

/* let userName = "";
while(userName == "" || userName == null){
    userName = window.prompt("Enter your name: ")
}
console.log("Hello", userName); */

//do while loop = do something,
                // then you check the condition,
                // repeat if condition is true.


/* let userName;

do{
    userName = window.prompt("Enter your name");
}while(userName == "")

console.log("Hello", userName); */

//For Loop = repeat some code a certain  amount of times:

/* for(let i = 10; i > 0; i-=1){
    console.log(i);
}

console.log("HAPPY NEW YEAR!") */


//BREAK and CONTINUE statements
//break = breaks out of a loop entirely
//continue = skip an iteration of a loop

/* for(i = 1; i<=20; i+=1){
    if(i == 13){
        break;
    }
    console.log(i)
}

for(i = 1; i<=20; i+=1){
    if(i == 13){
        continue;
    }
    console.log(i)
} */

//nested loop
// => a loop inside of another loop

/* for(let i = 1;i<=3; i+=1){
    for(let j = 1;j<=3; j+=1){
        console.log(j)
    }
} */

/* let symbol = window.prompt("Enter a symbol to use:");
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns3");

for(let i = 1;i<=rows; i+=1){
    for(let j = 1;j<=columns; j+=1){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
} */

//FUNCTION = Define code once, and use it many times.
//           To perform some code, call the function name.
/* let userName = "Aayush";
let age = 21;
happyBirthday();
happyBirthday();
happyBirthday();
function happyBirthday(){
    console.log("Happy Birthday To you!");
    console.log("Happy Birthday To you!");
    console.log("Happy Birthday Dear", userName);
    console.log("Happy Birthday To you!");
    console.log("You are", age,"years old!");

} */

/* startProgram();

function startProgram(){
    let userName = "Aayush";
    let age = 21;
 happyBirthday(userName, age);

}
function happyBirthday(userName, age){
    console.log("Happy Birthday To you!");
    console.log("Happy Birthday To you!");
    console.log("Happy Birthday Dear", userName);
    console.log("Happy Birthday To you!");
    console.log("You are", age,"years old!");

} */

//Return statement = returns a value back to the place
//                   where you invoke a function

/* let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);
console.log("The area is:", area);

function getArea(width, height){
    return width*height;
} */

//ternary operator = Shortcut for an 'if/else statement'
//                   Takes 3 operands 
//                   it is represented by '?'

//                  1. a condition with ?
//                  2. expression if True :
//                  3. expression if False

// condition ? exprIfTrue : exprIfFalse


//Normal way...

/* let adult = checkAge(21);
console.log(adult);

function checkAge(age){

    if(age >=18){
        return true;
    }
    else{
        return false;
    }

} */

//using ternary operator...

/* let adult = checkAge(21);
console.log(adult);

function checkAge(age){

    return age >= 18 ? true : false; //here in this line of code we used ternary operator syntax i.e-> condition ? exprIfTrue : exprIfFalse 

} */

//another example
/* checkWinner(true);
function checkWinner(win){
    win ? console.log('YOU WIN!'): console.log('YOU LOOSE!');
} */

//Let and var keywords...

//variable scope = where a variable is accessible

//let = variables are limited to block scope{}
//var = variables are limited to a function(){}

//global variable = it is declared outside any function
// (if global, var will CHANGE browser's window properties)


//example...

/* doSomething();
function doSomething(){
    for(var i = 1; i<=3; i+=1){
        //console.log(i);
    
    }
}
console.log(i); */

/* for(var i = 1; i<=3; i+=1){
    console.log(i);

}

console.log(i); */


// Template literals = delimited with (`) i.e backtick
//                     instead of double or single quotes
//                     allows embedded variables and expression


//One way or writing code...
/* let userName = "Aayush";
let items = 3;
let total = 75;

console.log("Hello", userName);
console.log("You have", items, "items in your cart");
console.log("Your total is $", total); */

//another way of writing codes using template literals...
/* let userName = "Aayush";
let items = 3;
let total = 75; */

/* console.log("Hello", userName);
console.log("You have", items, "items in your cart");
console.log("Your total is $", total); */

/* console.log(`Hello ${userName}`);
console.log(`You have 4{items} items in your cart.`);
console.log(`Your total is $${total}`); */

/* let text = 
`Hello ${userName} <br>
You have 4{items} items in your cart<br>
Your total is $${total}<br>`;

//console.log(text);
document.getElementById("myLabel").innerHTML = text;
 */





// toLocaleString() = returns a string with a language
//                    sensitive representation of this number

// number.toLocaleString(locale, {options});

//'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

//let myNum = 100;

//myNum = myNum.toLocaleString("en-US"); //US English
//myNum = myNum.toLocaleString("hi-IN"); //Hindi
//myNum = myNum.toLocaleString("de-DE"); //Standard German

//format number as Currencies...
//myNum = myNum.toLocaleString("en-US", {style: "currency", currency:"USD"});
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency:"INR"});
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency:"EUR"});


//format number as percent
//myNum = myNum.toLocaleString(undefined, {style: "percent"});

//format number as units
//myNum = myNum.toLocaleString(undefined, {style:"unit", unit: "celsius"});
//console.log(myNum);


//Very basic number guessing game

/* const answer = Math.floor(Math.random() * 10 +1)
let guesses = 0;

document.getElementById("submitButton").onclick = function (){

    let guess = document.getElementById("guessField").value
    guesses +=1;
    
    if ( guess == answer){
        alert(`${answer} is the #. It took you ${guesses} guesses `)
    }
    else if(guess < answer){
        alert("Too small!")
    }
    else{
        alert("Too large!")
    }
} */

//Temperature conversion program


/* document.getElementById("submitButton").onclick = function (){
    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C"
    }
    else if(document.getElementById("fButton").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F"
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }

}

function toCelsius (temp){
    return (temp -32) * (5/9);

}
function toFahrenheit (temp){
    return temp * 9 / 5 +32;
} */

/* <!-- BMI calculator --> */


/* document.getElementById("submitBtn").onclick = function () {
    // Retrieve values from textboxes
    let weight = parseFloat(document.getElementById("wTextbox").value);
    let height = parseFloat(document.getElementById("hTextbox").value);

    // Check if the input values are valid numbers
    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("bmiLabel").innerHTML = "Invalid input. Please enter valid numbers.";
    } else {
        // Calculate BMI
        let bmi = BMI(weight, height);

        // Display the result
        document.getElementById("bmiLabel").innerHTML = "BMI: " + bmi.toFixed(2); // Limit to two decimal places
    }
};

function BMI(weight, height) {
    // Calculate BMI using the formula
    return weight / Math.pow(height / 100, 2); // Convert height to meters (dividing by 100)
} */


//Array = think of it as a variable
//        that can store multiple values

let fruits = ["apple","orange","banana"];

//fruits[0] = "coconut"
fruits.push("lemon"); //Add an element
fruits.pop(); // removes last element
fruits.unshift("Mango"); //add element to beginning
fruits.shift(); //removes element from beginning

let length = fruits.length; //finds the length of array
let index = fruits.indexOf("apple"); //finds the index of particular element



console.log(fruits);
console.log(length); //display the length of array
console.log(index); //displays the index of particular element
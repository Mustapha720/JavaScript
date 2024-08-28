// alert("Welcome to Javascript!");

// Variables - are container
// Data types - string, number, boolean, array, object
let name = "Mustapha"; // This is a string
let num = 5; // This is a number

const username = "Dray";


// Naming conventions
// 1. A variable name cannot start with a number
const user1 = "Quyum"

// 2. A variable name cannot have a whitespace but a underscore
// Underscore types
// Snake casing
const user_name = "Dara"
// Camel casing
const userNameAtSqi = "Dray" // lower camel casing
const UserNameAtSqi = "Dray" // upper camel casing

// 3. Variable names can start with an underscore
const _student = "Taiwo"
const $student = "Dray"

// 4. Variable names should match with what they are (be specific)
var studentName = "Joy"

// 5. Variable names cannot be Javascript keywords
// Keywords - for, const, alert, switch, try, foreach, onclick, function, var, let, innerHTML, innerText, Math

// const foreach = 5;


var password = 5464

// Displaying variables
// Alert
// alert("Mustapha")

// Console - mostly used for debugging
console.log($student, studentName, password);

// Operators +, -, *, /
let x = 5
let y = 10
console.log(x + y)

// innerText and innerHTML
document.getElementById("display").innerHTML += "<br>" + "Welcome to Level 2";

function changeName() {
    document.getElementById('user').innerText = "Dray"
    document.getElementById('username').innerText = "Dray"
}

function changeText() {
    document.getElementById('welcome').style.fontSize = '40px';
    document.getElementById('welcome').style.color = "red";
    document.getElementById('welcome').style.backgroundColor = "blue";
    document.getElementById('welcome').style.marginTop = "20px";
}

function hideWelcome() {
    document.getElementById('welcome').style.display = "none";
}

function showWelcome() {
    document.getElementById('welcome').style.display = "block";
}

function Open() {
    document.getElementById('div').innerText = "I am open";
    document.getElementById('click').innerText = "Close";
}



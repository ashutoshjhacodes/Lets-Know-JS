//Q.1 ) What is function Declaration?
//Ans: When a function is declared or defined normally then
// it is called function declaration

//Example:

function square(num) {
  return num * num;
}

//calling a function

console.log(square(5));

//Q.2) What is Function Expression?
//Ans: When we pass a function to a variable that is called Function Expression.

const a = function (num) {
  return num * num;
};

// A function passed to a is called anonymous function as it does not have names

console.log(a(9));

//Q.3) What are First Class Functions?
//Ans: When in a language functions can be treated as variables then in that case
//fns are called first class functions

function displaySquare(fn) {
  console.log("square is " + fn(10));
}
displaySquare(square);

//Q-4) What is IIFE?
//Ans: IIFE stands for immediately invoked function expression. It is used to call function immediately.

(function sum(a, b) {
  console.log(a + b);
})(5, 10);

//Q.5) What  will be the output of below code?
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(5);

//Output will be 5.

//Ques: 6) Functional Scope:
//Ans:Variables defined inside a function cannot be accessed from
//anywhere outside the function, because the variable is defined
//only in the scope of the function. However, a function can access
//all variables and functions defined inside the scope in which it is defined.

//In other words, a function defined in the global scope can
//access all variables defined in the global scope.
//A function defined inside another function can also
//access all variables defined in its parent function,
//and any other variables to which the parent function has access.

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "A J";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "AJ scored 5"

//ques:i/o question

for(let k=0;k<5;k++){
    setTimeout(function()  {
        console.log(k);
    }, k*1000);
}

//output 0,1,2,3,4 as let is block scoped

//ques: i/o questions

for(var i=0;i<5;i++){
    setTimeout(function()  {
        console.log(i);
    }, i*1000);
}
//output 5 5 5 5 5

//Question: Function Hoisting
//Ans: Functions are hoisted compltely unlike variables so we can access functions 
//before their declaration
aname();
function aname(){
    console.log("Ashutosh Jha is great Developer");
}

//O/P BASED Questions:

var x=21;
var fun=function (){
    console.log(x);
    var x=22;
}
fun(); //ANS: IN LOCAL SCOPE IT WILL GIVE UNDEFINED

//Question: Arguments vs Parameters

function hero(a){                            //Parameters or params
    console.log(a+" is a star")
}
hero("A J");  //Arguments

//Question: Spread Operator and Rest Operator

var arry=[10,20,30];
function sum2(...num){ // Rest Operator
    console.log(num);
}
sum2(...arry);    // Spread Operator
//**Rest Spread operator should be last formal parameter  */

const fn1 =(a,x,y,...numbers)=>{
    console.log(x,y,numbers);
}
fn1(5,6,8,7,3,9,4,7);

//A callback function is a function passed into another function as an argument,
 //which is then invoked inside the outer function to complete some kind of routine or action.
 //Examples are map function,or eventlisteners

//Arrow functions:
//was introduced in ES6.
//clean syntax

const add=(a1,a2)=>a1+a2;

//Difference between arrow and regular functions



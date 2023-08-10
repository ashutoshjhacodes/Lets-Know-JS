//What is Scope?
// Scope is the region where a particular variable can be recognize or accessible.
// {
//     //block scope
//     //let and const are block scoper
// }
var a = 20;
function x() {
  var a = 0;
  console.log(a); //var is function scoped we cant access it outside this fn
}

x();

function test() {
  let i = "Hello";
  if (true) {
    let i = "Hi";
    console.log(i); //Hi
  }
  console.log(i); // Hello
}
test(); //hi
//hello

//Variable Shadowing

function test2() {
  var a1 = 2;
  let a2 = 3;
  if (true) {
    let a1 = "20"; // Shadow will be successful
    /* var a2="30"; */ //Illegal Shadowing
    console.log(a1);
    /* console.log(a2); */
  }
}
test2();

//call method calls the function will give "this" value and arguments individually
function sayHello(age){
    return "Hello " + this.name+ age;
}
var obj={name:"Ashu"};
console.log(sayHello.call(obj,25));
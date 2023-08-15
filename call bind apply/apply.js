//apply: calls the speified function with a given "this value"

function sayHello(day,status){
    return "Hello " + this.name  + day + status;
}
var boj={
    name:"Ashu",
};
console.log(sayHello.apply(boj,[" monday "," good "]));
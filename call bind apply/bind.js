//bind method returns a new function which we can further invoke to get the required "this " value with parameters passed normally
function sayHello(day,status){
    return "Hello " + this.name  + day + status;
}
var boj={
    name:"Ashu",
};
const hellobind=sayHello.bind(boj," tuesday "," great ");
console.log(hellobind());
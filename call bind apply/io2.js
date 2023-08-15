//Give the output:
const age = 10;
var person = {
    name: "Piyush",
  age: 20,
  getAge: function(){
    return this.age;
  }
}

var person2 = {age:  24};

console.log(person.getAge.call(person2)); // show with apply and bind as well
console.log(person.getAge.apply(person2));
console.log(person.getAge.bind(person2));
const getBind=person.getAge.bind(person2);
console.log(getBind());
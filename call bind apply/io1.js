//What will be the output:

const person = { name: 'Ashu' };

function sayHi(age) {
  return `${this.name} is ${age} years`;
}

console.log(sayHi.call(person, 24)); //will give person
console.log(sayHi.bind(person, 24)); //will return a function sayHi()

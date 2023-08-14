//what is the output??

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a);

console.log(a[b]);

//explanation it will [object object ] as a key so
//a[object object]=123;
//a[object object]=456;
//so output will be 456

console.log(..."ashutosh"); //will spread characters into an array

const user = { name: "ashu", age: 25 };
const admin = { admin: true, ...user };
console.log(admin); //spread operator will pass all the properties of user to admin

const settings = {
  id: 24,
  health: 19,
  level: 7,
};
const obj = JSON.stringify(settings, ["id", "health"]);
console.log(obj);

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2; //this will point to shape beacuse it is normal function
  },
  perimeter: () => 2 * Math.PI * this.radius, // this will point global environment as it is an arrow function and give NaN as a result
};
console.log(shape.diameter());
console.log(shape.perimeter());

//Whats the output

let c1={greeting:"Hey!"};
let d;
d=c1;
c1.greeting="Hello";
console.log(d.greeting);  //hello because it gives reference to the same object memory space
//we are only providing the reference not the complete object

console.log({a:1}=={a:1});   //false as reference is different memory location is different
console.log({a:1}==={a:1});   //false 

let person={name:"ashu"};
const mem=[person];  //mem[0]=person;
person=null;
console.log(mem); //whole object will be printed with no effect

 //Whats the output:
 const value={number:10};
 const multiply=(x={...value})=>{
    console.log((x.number *=2));
 }

 //whole object is passed and will take default value from ...value
 multiply(); //20
 multiply(); //20 
 //will update the value of object
 multiply(value); //20
 multiply(value); //40
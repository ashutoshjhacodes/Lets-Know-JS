//Objects is a collection of properties
//properties are an association of key and values
//properties value can be function in that case it is called methods

const obj={
    name:"ashu",
    age:25,
    occupation: "software developer",
    "state and city": "up and kanpur"
}
obj.name="aj";       //changing a property


delete obj.age;   //deleting a property
console.log(obj);

let a=obj.name;  //accessing a property
console.log(a);

console.log(obj["state and city"]);

//for in loop is used to traverse through the object

for(key in obj){
    console.log(key ,":",obj[key]); //key and values will be printed
}







//Whats is Deep Copy and Shallow Copy?
//shallow copy is when an object holds reference of original object
//deep copy completely copies object without holding any refrences to the original object

let user={
    name:"Ashutosh",
    age: 25,
    fullName:{
        firstName:{
            n:12,
            caste:"brahmin"
        },
        lastName:"J",
    }
};
const objCopy=Object.assign({},user);
console.log(objCopy);

const obj1=JSON.parse(JSON.stringify(user));
console.log(obj1);

const objCopy3={...user};
console.log(objCopy3);


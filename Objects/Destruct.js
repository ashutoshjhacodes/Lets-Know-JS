//What is destructuring of the array?


let user={
    name:"Ashutosh",
    age:25,
    fullName:{
        firstName:"Ashu",
        lastName:"Jha",
    }
};
const name="Ashutosh Jha";
 const {name:myName}=user;  //destructuring
 console.log(myName);
 const {fullName:{firstName}}=user; //nested destructuring
 console.log(firstName);
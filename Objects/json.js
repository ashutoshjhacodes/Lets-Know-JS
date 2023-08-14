//what is json.strigify and json.parse

const user={
    name:"ashu",
    age:25
};

const obj=JSON.stringify(user); //converts object into string
localStorage.setItem("test",obj); //stores object into localStorage in string format
console.log(JSON.parse(localStorage.setItem("test",obj))); //convets object into string format to normal object format


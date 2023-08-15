//FuncName.call(Object,params)

Function.prototype.myCall = function(myObj, ...params) {
    myObj.myMethod = this;
    return myObj.myMethod(...params);
};

const obj = {
    name: "ashutosh",
    age: "24",
};

function getNameAge(a, b) {
    return this.name + this.age + a + b; // Add a return statement here
}

console.log(getNameAge.call(obj, 20, 10));

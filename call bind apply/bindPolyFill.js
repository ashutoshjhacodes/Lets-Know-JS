//FunctionNmae.Bind(myObj, ...params)

Function.prototype.myBind = function (myObj,...params) {
  myObj.myFunction = this;
  return function (...args) {
     return myObj.myFunction(...params,...args);
  };
};

const obj={
    name:"ashutosh",
    age:"24"
}
function getNameAge(a,b){
    return this.name + this.age+a+b;
}
const a=getNameAge.myBind(obj,20);
console.log(a(10));

//functionName.apply(object,[params])

Function.prototype.myApply=function (myObj,args){
    myObj.myApply=this;
    return myObj.myApply(...args);
}
const obj={
    name:"ashutosh",
    age:"24"
}
function getNameAge(a,b){
    return this.name + this.age+a+b;
}
console.log(getNameAge.myApply(obj,[20,10]));

//promise.all will only work if all the promises are resolved
//it will return array of resolved promise output
//if it encounters any  promise which is rejected then in that case
//it will not return any promise and give error message
//if you want to do a task when all promises are resolved then only use promise.all
//or if promises are dependent on each other

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 1000);
});
const p2= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("two",2000));
});
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("three",3000));
});
const p4=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("four",4000));
});
Promise.all([p1,p2,p3])
.then((values)=>console.log(values))
.catch((error)=>console.log(error));

//expected output==>error
//because or p4 promise
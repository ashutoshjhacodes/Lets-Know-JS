// const p1=new Promise((resolve,reject)=> setTimeout(()=>resolve("p1 passed"),1000));
const p2=new Promise((resolve,reject)=> setTimeout(()=>reject("p2 passed"),2000));
const p3=new Promise((resolve,reject)=> setTimeout(()=>reject("p3 passed"),3000));
const p4=new Promise((resolve,reject)=> setTimeout(()=>reject("p4 failed"),4000));
Promise.any([p2,p3,p4])
.then((value)=>console.log(value))
.catch((error)=>console.log(error));

//promise.any will return only resolved promises and whatecer first resolved promise it will get
//it will return that
//it will not bother about the rejected promise
//it is finding any of the fulfillment promise
//if all promise are failure: then it will return
// //[AggregateError: All promises were rejected] {
//     [errors]: [ 'p2 passed', 'p3 passed', 'p4 failed' ]
// }
const p2=new Promise((resolve,reject)=> setTimeout(()=>reject("p2 passed"),2000));
const p3=new Promise((resolve,reject)=> setTimeout(()=>reject("p3 passed"),3000));
const p4=new Promise((resolve,reject)=> setTimeout(()=>reject("p4 failed"),400));
Promise.race([p2,p3,p4])
.then((value)=>console.log(value))
.catch((error)=>console.log(error));
//promise.race will return whatever first promise it will encounter whether it can be resolved
//or rejected
//whoever runs the race will be returned

//promise.allsettled will work for independent tasks
//no matter what promises output is either it is rejected or it is resolved
//it will return a objects for all the promise in an array
//in case of resolved it will return{status: , value:  }
//in case of rejected it will return{status: ,reason:  }

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p1 pass"),1000)
});
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p2 pass"),2000)
});
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p3 pass"),3000)
});
const p4=new Promise((resolve,reject)=>{
    setTimeout(()=>reject("p4 fail"),4000)
});
Promise.allSettled([p1,p2,p3,p4])
.then((value)=> console.log(value))
.catch((error)=> console.log(error));

//Expected Output:
// [
//     { status: 'fulfilled', value: 'p1 pass' },
//     { status: 'fulfilled', value: 'p2 pass' },
//     { status: 'fulfilled', value: 'p3 pass' },
//     { status: 'rejected', reason: 'p4 fail' }
//   ]
//Promise Constructor
let promise =new Promise(function executor(resolve,reject){

    //some async operation which calls resolve on success and reject on failure

 resolve(1);
 reject(-1);
});

//promise success and failure handlers are registered
promise.then(function resolveCallback(value){
    console.log("val should be 1", `${value}`);
})
.catch(function rejectCallback(error){
    console.log("error should be -1",`${error}`);
})


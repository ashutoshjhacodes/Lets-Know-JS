//Promise Constructor
// let promise =new Promise(function executor(resolve,reject){

//     //some async operation which calls resolve on success and reject on failure

//  resolve(1);
//  reject(-1);
// });

// //promise success and failure handlers are registered
// promise.then(function resolveCallback(value){
//     console.log("val should be 1", `${value}`);
// })
// .catch(function rejectCallback(error){
//     console.log("error should be -1",`${error}`);
// })

//step 1
//creation of constructor function
function myPromise(executor) {
  //step 3
  let onResolve;
  let onReject;
  let iscalled = false; //indicates callback has been called(step 3)
  //step:4 for sync operations
  let isFulfilled=false;
  let isRejected=false;
  let value;
  let error;
  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if(!iscalled && isFulfilled){
        onResolve(value);
        iscalled=true;
    }
    return this; //for chaining
  };
  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if(!iscalled && isRejected){
        onReject(error);
        iscalled=true;
    }
    return this; //reference to same object
  };
  //step2
  //calling executor function with two params:resolve and reject

  //step3
  //complete resolve and reject function
  function resolve(val) {
    isFulfilled=true;
    value=val;
    if (typeof onResolve == "function" && !iscalled) {
      onResolve(val);
      iscalled = true;
    }
  }
  function reject(err) {
    isRejected=true;
    err=error;
    if (typeof onReject == "function" && !iscalled) {
      onReject(val);
      iscalled = true;
    }
  }
  //resolve reject are private functions passed into executor
  executor(resolve, reject);
}


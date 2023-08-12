//i/o questions related to set timeout

//----------------------QUESTION 1-------------------------------------
//i is pointing to same reference for all the iterayions that is why it giving 6 as output

// function a(){
//     for(var i=0;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000)
//     }
// }
// a();

//Output: 6 6 6 6 6 6

//------------------------QUSETION: 2--------------------------
//let creates block for each and every variable individually and treat it as different variable


function b() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
b();

//Output: 0 1 2 3 4 5

//----------------do it only with var--------------
//for this we have to enclose the for loop into a closure so that everytime i will have a new reference value

function c() {
  function close(x) {
    for (var i = 0; i <= 5; i++) {
      setTimeout(function () {
        console.log(x);
      }, i * 1000);
    }
    close(i);
  }
}
c();

//output: 0 1 2 3 4 5

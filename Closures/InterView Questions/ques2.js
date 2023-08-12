//Time OPTIMISATION:

function find() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return function (index) {  //we have enclosed it with a function to do time optimization
    console.log(a[index]);
  };
}
console.time("10");
find()(100);
console.timeEnd("10");

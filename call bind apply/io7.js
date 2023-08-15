// Create a bound function
function f() {
  console.log(this); // global /window
}

let user = {
  g: f.bind(null),
};

user.g();

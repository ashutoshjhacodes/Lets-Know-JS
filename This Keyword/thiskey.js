//this keyword: does implicit binding
//depends on which context "this " keyword is present
//will reference to some object

//object calculator
let calculator = {
  read() {
    this.a = +prompt("Type the value of a ", 0);
    this.b = +prompt("Type the value of b", 0);
  },

  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//Find min/max in an array and use apply to enhance a built-in function.

const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply

let max = Math.max.apply(null, numbers); // equal to Math.max

let min = Math.min.apply(null, numbers); // equal to Math.min 

// vs. simple loop based algorithm

max = -Infinity, min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

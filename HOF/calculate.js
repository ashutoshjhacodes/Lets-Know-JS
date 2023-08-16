const radius = [3, 4, 5, 6, 7];

const area = function(radius) {
    return Math.PI * radius * radius;
};

const diameter = function(radius) {
    return 2 * radius;
};

const circumference = function(radius) {
    return 2 * Math.PI * radius;
};

const calculate = function(arr, logic) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
};

const areaResults = calculate(radius, area);
const diameterResults = calculate(radius, diameter);
const circumferenceResults = calculate(radius, circumference);

console.log("Area:", areaResults);
console.log("Diameter:", diameterResults);
console.log("Circumference:", circumferenceResults);

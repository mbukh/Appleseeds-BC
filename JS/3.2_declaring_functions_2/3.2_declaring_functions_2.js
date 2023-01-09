/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions

* Please reformat the following function
expressions to IIFE functions.
*/

// From function declarations to explicit and implicit return functions (one of each).
const welcome1 = () => {
    let welcome = "Welcome to Appleseeds Bootcamp!";
    return welcome;
};

const power1 = (a) => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
};

console.log(welcome1());
console.log(power1(4));

const welcome2 = () => "Welcome to Appleseeds Bootcamp!";
const power2 = a => Math.pow(a, 2);

console.log(welcome2());
console.log(power2(4));

// // From function expressions to IIFE functions.
const squareRoot = (a => Math.sqrt(a))(16);
const randomNumbers = ((a, b) => Math.random() * (a - b) + b)(1, 2);

console.log(squareRoot);
console.log(randomNumbers);

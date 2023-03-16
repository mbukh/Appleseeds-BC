// CommonJS syntax
// main.js

// Importing a constant value
const { PI } = require('./common_js_export_values');

// Importing a function
const { add } = require('./common_js_export_values');

// Importing a class
const { Calculator } = require('./common_js_export_values');

// Importing a single value
const logger = require('./common_js_export_single_value');

// Using the imported values
console.log(PI); // 3.14159

console.log(add(2, 3)); // 5

const calculator = new Calculator();
calculator.add(2);
calculator.subtract(1);
console.log(calculator.value); // 1

logger('Hello, world!'); // "Hello, world!" in the console

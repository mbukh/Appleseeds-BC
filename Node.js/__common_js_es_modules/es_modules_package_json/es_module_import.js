// ES module syntax
// main.js

// Importing a constant value
import { PI } from './es_modules_export_values.js';

// Importing a function
import { add } from './es_modules_export_values.js';

// Importing a class
import { Calculator } from './es_modules_export_values.js';

// Importing a single value
import logger from './es_modules_export_single_value.js';

// Using the imported values
console.log(PI); // 3.14159

console.log(add(2, 3)); // 5

const calculator = new Calculator();
calculator.add(2);
calculator.subtract(1);
console.log(calculator.value); // 1

logger('Hello, world!'); // "Hello, world!" in the console

// ES module syntax
// math.js

// Exporting a constant value
export const PI = 3.14159;

// Exporting a function
export function add(a, b) {
  return a + b;
}

// Exporting a class
export class Calculator {
  constructor() {
    this.value = 0;
  }
  
  add(number) {
    this.value += number;
  }
  
  subtract(number) {
    this.value -= number;
  }
}

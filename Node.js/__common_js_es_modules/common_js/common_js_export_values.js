// CommonJS syntax
// math.js

// Exporting a constant value
exports.PI = 3.14159;

// Exporting a function
exports.add = function(a, b) {
  return a + b;
};

// Exporting a class
exports.Calculator = class {
  constructor() {
    this.value = 0;
  }
  
  add(number) {
    this.value += number;
  }
  
  subtract(number) {
    this.value -= number;
  }
};

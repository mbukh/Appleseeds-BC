// 1. hoisting var and hoisting full function
// undefined
// 2

// 2.
// Aurelio De Rosa
// undefined

// 3.
//  -> "use strict";

// 4. hoisting function declaration

// 5. function scope and global scope
// reference error

// 6.
function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

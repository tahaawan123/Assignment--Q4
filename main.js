"use strict";
// Q 4.Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments.
// • Set up two different variables with different values.
let num1 = 10;
let num2 = 20;
// • Call a function with these variables as arguments and output the result using console.log.
function callFunc(num1, num2) {
    return [num1, num2];
}
console.log(callFunc(num1, num2));
// • Create a second call to the function with two more numbers as arguments.
console.log(callFunc(2, 4));

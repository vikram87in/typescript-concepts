"use strict";
let var1;
var1 = 23;
var1 = 'Hello';
console.log(var1); // Hello
console.log(var1.trim());
let var2;
var2 = 23;
// console.log(var2.toPrecision(2)); // error: var2' is of type 'unknown'.
if (typeof var2 == 'number') {
    console.log(var2.toPrecision(2));
}
var2 = 'Hello'; // can assign any value to unknown; but need to check the type before using it
console.log(var2); // Hello
if (typeof var2 == 'string') {
    console.log(var2.trim());
}

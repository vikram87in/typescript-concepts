"use strict";
const p2D = { x: 1, y: 5, z: 3 };
const p2DInterface = { x: 1, y: 5, z: 3 };
let box = { height: 5, width: 6, scale: 0.5 };
const add = (x, y) => x + y;
console.log(add(1, 2)); // Logs '3'
// In this example, MyFunctionType is a type alias for a function type. This function type takes two parameters, both of type number, and returns a number.
// The add constant is a function that matches this type. It takes two numbers and returns their sum.
// This is a powerful feature of TypeScript that allows you to define complex types for functions, including arrow functions.

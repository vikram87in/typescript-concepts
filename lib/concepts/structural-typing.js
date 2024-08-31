"use strict";
let p = { x: 1, y: 2 };
// let p1: Point2D = {x: 1, y: 2, z: 3}; // Error: Object literal may only specify known properties, and 'z' does not exist in type 'Point'.
// When an "object literal" is assigned to a variable or passed as a function argument, TypeScript uses a stricter check, called "excess property checking". 
// If an object literal has properties that don't exist in the target type, you'll get an error.
let p1 = { x: 1, y: 5, z: 3 };
p = p1; // OK, because Point3D has at least the same properties as Point2D; "excess" properties are allowed.
// p1 = p;   // Error: Property 'z' is missing in type 'Point2D' but required in type 'Point3D'.
// Function arguments
function addNumbers(a, b) {
    return a + b;
}
addNumbers(1, 2); // 3
// addNumbers(1, 2, 3); // Error: Expected 2 arguments, but got 3.
function addpoints(p1, p2) {
    return { x: p1.x + p2.x, y: p1.y + p2.y };
}
// let sum = addpoints(p, p) // Error: Argument of type 'Point2D' is not assignable to parameter of type 'Point3D'. Property 'z' is missing in type 'Point2D' but required in type 'Point3D'.
let sum = addpoints(p, p1); // { x: 2, y: 7 }

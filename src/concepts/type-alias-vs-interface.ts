type Point2DAlias = { 
  x: number, 
  y: number 
};

type Point3DAlias
 = Point2DAlias & {
  z: number
};

const p2D: Point3DAlias = { x: 1, y: 5, z: 3 };


///////////////////////////////////////////////////////////////////////////////////////


interface Point2DInterface {
  x: number,
  y: number
}

interface Point3DInterface extends Point2DInterface {
  z: number
}

const p2DInterface: Point3DInterface = { x: 1, y: 5, z: 3 };

///////////////////////////////////////////////////////////////////////////////////////

/**
 * Use type aliases when you want to define a type that can't be represented with an interface.
 * Interfaces do not support arrow (shorthand) functions, primitive types, unions, and intersections. So, use type aliases in such cases.
 * Interfaces support declaration merging, while type aliases don't. Also, if you like extends keyword, use interfaces.
 * 
 */

// Declaration Merging: In TypeScript, declaration merging is a concept where the compiler merges two separate declarations declared with the same name into a single definition. 

interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

let box: Box = {height: 5, width: 6, scale: 0.5};


// In this example, we have two separate declarations for an interface named Box. The first declaration has two properties: height and width. The second declaration has one property: scale.

// Because of declaration merging, TypeScript combines these two declarations into a single Box interface that has all three properties: height, width, and scale. This is why we can create a Box object with all three properties in the last line.

// This feature is particularly useful when you want to extend existing types with additional properties or methods. It's also used extensively in TypeScript's type definitions for JavaScript libraries to allow adding new methods to existing types.



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Type Alias shorthand function: In TypeScript, type aliases can indeed be used to define types for shorthand (arrow) functions. Here's an example:

type MyFunctionType = (param1: number, param2: number) => number;

const add: MyFunctionType = (x, y) => x + y;

console.log(add(1, 2));  // Logs '3'

// In this example, MyFunctionType is a type alias for a function type. This function type takes two parameters, both of type number, and returns a number.

// The add constant is a function that matches this type. It takes two numbers and returns their sum.

// This is a powerful feature of TypeScript that allows you to define complex types for functions, including arrow functions.
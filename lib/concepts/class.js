"use strict";
class Person {
    #age; // private field native to javascript
    // private age: number; // private field only in typescript
    name; // protected field only in typescript
    constructor(name, age) {
        this.name = name;
        this.#age = age ?? 0;
    }
    move(steps) {
        console.log(`${this.name} moved ${steps} steps at the age of ${this.#age}`);
    }
}
const person = new Person('Alice', 32);
person.move(10); // Alice moved 10 steps at the age of 32
// console.log(person.name); // Error: Property 'name' is protected and only accessible within class 'Person' and its subclasses.
class Employee extends Person {
    payTax(amount) {
        console.log(`${this.name} paid ${amount} as tax`);
    }
}
const employee = new Employee('Bob', 32);
employee.move(5); // Bob moved 5 steps
employee.payTax(100); // Bob paid 100 as tax
// employee.name = 'Charlie'; // Error: Property 'name' is protected and only accessible within class 'Person' and its subclasses.

"use strict";
// type Animal = {
//   legs: number;
//   move(): void;
//   eyes: number;
//   walk(): void;
// }
class Dog {
    legs;
    constructor(numberOfLegs, _eyes) {
        this.setLegs(numberOfLegs);
        this.eyes = _eyes;
    }
    eyes;
    walk() {
        console.log('walking dog with ' + this.eyes + ' eyes');
    }
    setLegs(numberOfLegs) {
        this.legs = numberOfLegs;
    }
    move() {
        console.log('Moving dog with ' + this.legs + ' legs');
    }
}
const dog = new Dog(4, 2);
dog.move(); // Moving dog with 4 legs
dog.walk(); // walking dog with 2 eyes
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let num; // It is the responsibility of the developer to make sure that definitive assignment assertion is used properly.
function setNumber() {
    num = 5;
}
setNumber(); // if we don't call this function, num will be undefined
console.log(num); // 5

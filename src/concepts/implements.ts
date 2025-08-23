export { };

// type Animal = {
//   legs: number;
//   move(): void;
//   eyes: number;
//   walk(): void;
// }

interface Animal { // can use the type keyword as well as shown above in the comments
  legs: number;
  move(): void;
}


interface Animal {  // automatically merged with the previous interface
  eyes: number;
  walk(): void;
}


class Dog implements Animal {
  legs!: number;
  constructor(numberOfLegs: number, _eyes: number) {
    this.setLegs(numberOfLegs);
    this.eyes = _eyes;
  }
  eyes: number;
  walk(): void {
    console.log('walking dog with ' + this.eyes + ' eyes');
  }
  setLegs(numberOfLegs: number) {
    this.legs = numberOfLegs;
  }
  move(): void {
    console.log('Moving dog with ' + this.legs + ' legs');

  }
}
const dog = new Dog(4, 2);
dog.move(); // Moving dog with 4 legs
dog.walk(); // walking dog with 2 eyes

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let num!: number; // It is the responsibility of the developer to make sure that definitive assignment assertion is used properly.

function setNumber() {
  num = 5;
}
setNumber(); // if we don't call this function, num will be undefined
console.log(num); // 5

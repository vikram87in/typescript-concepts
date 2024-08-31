class Person1 {
  private age;
  public readonly name; // can be accessed but not modified
  constructor(_age: number, _name: string) {
    this.age = _age ?? 0;
    this.name = _name ?? '';
  }
  growOld = () => {
    this.age++;
  }
  getAge() {
    return this.age;
  }
  getName() {
    return this.name;
  }
  setName(name: string) {
    // this.name = name; // Error: Cannot assign to 'name' because it is a read-only property.
  }
}

const person1 = new Person1(32, 'vikram');
let growOld = person1.growOld;
growOld();
console.log(person1.getAge());
console.log(person1.getName());
person1.setName('viks');
console.log(person1.getName());
// setTimeout(person1.growOld, 1000);


///////////////////////////////////////////////////////////////
// example of class parameter properties
class Person2 {
  constructor(public age: number, public name: string) { } // shorthand for defining properties and assigning values
}

const person2 = new Person2(32, 'vikram');
console.log(person2.age);
console.log(person2.name);
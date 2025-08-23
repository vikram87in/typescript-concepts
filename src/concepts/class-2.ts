export { };

class Foo {
    private foo = 123;

    // Getter for 'foo'
    get exposedFoo(): number {
        return this.foo;
    }

    // Setter for 'foo'
    set exposedFoo(value: number) {
        this.foo = value;
    }
}

let foo = new Foo();
console.log('>> ', foo.exposedFoo);
foo.exposedFoo = 345;
console.log('>> ', foo.exposedFoo);


////////////////////////////////////////////////////////////

class Animal {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
      super(name); // Call parent constructor
      console.log('>> Dog constructor', this.name);
    }
    speak() {
        console.log(`${this.name} barks.`);
    }
    bark() {
        console.log(`${this.name} only barks.`);
    }
}

const dog: Dog = new Dog('Rex');
dog.bark();
dog.speak();
const animal = new Animal('Generic Animal');
animal.speak();


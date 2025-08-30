export { };

console.log('>> readonly....');


type Foo = {
    bar: number,
     bas: number
}

type ReadonlyFoo = Readonly<Foo>;

let config: Foo = {
    bar: 123,
    bas: 123
};

foo(config);

function foo (config: ReadonlyFoo): void {
  // config.bar = 456; // Error: Cannot assign to 'bar' because it is a read-only property.
}

class Baz {
    readonly bar: number;
    readonly car: number = 23;
    constructor(bar: number) {
        this.bar = bar; // OK
    }
    updateBar(newBar: number) {
        // this.bar = newBar; // Error: Cannot assign to 'bar' because it is a read-only property.
    }
}

const baz = new Baz(123);
baz.bar ;
// baz.bar =34;


let arrNumber: ReadonlyArray<number> = [1, 2, 3];
let arrString: readonly string[] = ['1', '2', '3'];
// arrNumber[2] = 3;
// arrString.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
// arrNumber[0] = 4; // Error: Cannot assign to '0' because it is a read-only property.


interface Too {
    readonly[x: number]: number; // index signature
}

/**
 * Usage
 */
let too: Too ;
too = { 0: 123, 2: 345 };
too = { 0: 3, 2: 345 , '3': 232};
console.log('>> ', too);
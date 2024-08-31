
type Add1 = (a: number, b: number) => number;

type Add1CallSignature = {
  (a: number, b: number): number;
  displayName?: string; // can add additional properties
}

interface Add1CallSignature1 {
  (a: number, b: number): number;
  displayName?: string; // can add additional properties
}

const add1: Add1 = (a: number, b: number): number => a + b; // type alias

const add2: (a: number, b: number) => number = (a, b) => a + b; // inline type annotation

const add3: Add1CallSignature = (a, b) => a + b; // call signature with type alias

const add4: Add1CallSignature1 = (a, b) => a + b; // call signature with interface

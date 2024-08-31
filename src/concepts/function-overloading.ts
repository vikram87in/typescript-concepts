function sumNumber(a: number): number;
function sumNumber(a: number, b: number): number;
function sumNumber(a: number, b: number, c: number): number;
function sumNumber(a: number, b?: number, c?: number): number {
  if (b != null && c != null) {
    return a + b + c;
  } else if (b != null) {
    return a + b;
  } else {
    return a;
  }
}

const sum1 = sumNumber(1, 2, 3);
console.log(sum1); // 6
const sum2 = sumNumber(1, 2);
console.log(sum2); // 3
const sum3 = sumNumber(1);
console.log(sum3); // 1
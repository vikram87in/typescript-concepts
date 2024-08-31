function fun(param1: any): unknown {
  if (param1) {
    return param1;
  }
}
let x = fun(1);
if (typeof x == 'string') {
  console.log(x.trim());
}
// console.log((x as string).trim()); // Error: although we are asserting x as string, it is not a string
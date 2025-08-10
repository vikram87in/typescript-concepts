// added a dummy export to make this file a module so that the variables are not in the global scope and don't cause conflicts
export { };

type StringOrNumber = string | number;


type MakeState = {
    getState: () => StringOrNumber;
    setState: (x: StringOrNumber) => void;
}

function makeState(): MakeState {
  let state:StringOrNumber;
  function getState(){
    return state;
  }
  function setState(x:StringOrNumber){
    state = x;
  }
  return {getState, setState};
}

let obj: MakeState = makeState();
obj.setState(12);

console.log('>> obj.getState(): ', obj.getState());
obj.setState('HELLO');
console.log('>> obj.getState(): ', obj.getState());

/*************************************************************************/

type MakeGenericState<T extends string | number = number> = {
    getState: () => T;
    setState: (x: T) => void;
}

function makeGenericState<T  extends string | number = number>(): MakeGenericState<T> {
  let state:T;
  function getState(){
    return state;
  }
  function setState(x:T){
    state = x;
  }
  return {getState, setState};
}

let obj1: MakeGenericState<string> = makeGenericState<string>();
obj1.setState('Hello');
console.log('>> obj1.getState(): ', obj1.getState());
let obj2: MakeGenericState = makeGenericState();
obj2.setState(42);
console.log('>> obj2.getState(): ', obj2.getState());

/*************************************************************************/

type Pair<T1, T2> = {
  first: T1;
  second: T2;
}

interface IPair<T1, T2> {
  first: T1;
  second: T2;
}

function makePair<
T1  extends number = number, 
T2 extends string | T1 = T1
>(){
  // let pair: IPair<T1, T2>;
  let pair: Pair<T1, T2>;
  function getPair(){
    return pair;
  }
  function setPair(x: T1, y: T2){
    pair = {
      first: x,
      second: y
    };
  }
  return {getPair, setPair};
}

let pairObj = makePair<number>();
pairObj.setPair(1, 2);
console.log('>> pairObj.getPair(): ', pairObj.getPair());
pairObj.setPair(3, 4);
console.log('>> pairObj.getPair(): ', pairObj.getPair());


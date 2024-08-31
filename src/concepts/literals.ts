let direction: 'left' | 'right' | 'top' | 'bottom' = "left";
direction = "right";
// direction = 'ss'; // Error: Type '"ss"' is not assignable to type '"left" | "right" | "top" | "bottom"'.

type Direction = 'left' | 'right' | 'top' | 'bottom';
let direction1: Direction = "left";
direction1 = "left";
// direction1 = "rightsd";

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;
let diceValue: DiceValue = 1;
diceValue = 2;
// diceValue = 7; // Error: Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'. 


export { };

// implement stack with array 

// export class Stack<T> {
//   private items: T[] = [];

//   // Add an item to the top of the stack
//   push(item: T): void {
//     this.items.push(item);
//   }

//   // Remove and return the item from the top of the stack
//   pop(): T | undefined {
//     return this.items.pop();
//   }

//   // View the item at the top of the stack without removing it
//   peek(): T | undefined {
//     return this.items[this.items.length - 1];
//   }

//   // Check if the stack is empty
//   isEmpty(): boolean {
//     return this.items.length === 0;
//   }

//   // Get the number of items in the stack
//   size(): number {
//     return this.items.length;
//   }

//   // Clear all items from the stack
//   clear(): void {
//     this.items = [];
//   }
// }

// implement stack with linked-list

//update this implementation to update the length property on every push and pop


class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class Stack<T> {
  private item: Node<T> | null = null;
  private length: number = 0;

  push(value: T): void {
    const newNode = new Node(value);
    newNode.next = this.item;
    this.item = newNode;
    this.length++;
  }



  pop(): T | undefined {
    if (!this.item) return undefined;
    const poppedValue = this.item.value;
    this.item = this.item.next;
    this.length--;
    return poppedValue;
  }

  peek(): T | undefined {
    return this.item ? this.item.value : undefined;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }
    

  clear(): void {
    this.item = null;
    this.length = 0;
  }
}

let stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.push(5);
console.log(stack.peek()); // 5
console.log(stack.size()); // 4
console.log(stack.isEmpty()); // false
stack.clear();
console.log(stack.isEmpty()); // true
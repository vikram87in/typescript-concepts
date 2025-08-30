export { };

// implement queue with linked list


class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class Queue<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length: number = 0;

  enqueue(value: T): void {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
    this.length++;
  }

  dequeue(): T | undefined {
    if (!this.head) return undefined;
    const dequeuedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length--;
    return dequeuedValue;
  }

  peek(): T | undefined {
    return this.head ? this.head.value : undefined;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

console.log('>> queue');
let queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.enqueue(5);
console.log(queue.peek()); // 2
console.log(queue.size()); // 4
console.log(queue.isEmpty()); // false
queue.clear();
console.log(queue.isEmpty()); // true
class Queue<T> {
  private data: T[];
  constructor() {
    this.data = [];
  }
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
  getQueue(): T[] {
    return this.data;
  }
}

const queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
queue.pop(); // 1
console.log(queue.getQueue()) // [2, 3]
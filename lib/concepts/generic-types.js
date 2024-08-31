"use strict";
class Queue {
    data;
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
    getQueue() {
        return this.data;
    }
}
const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.pop(); // 1
console.log(queue.getQueue()); // [2, 3]

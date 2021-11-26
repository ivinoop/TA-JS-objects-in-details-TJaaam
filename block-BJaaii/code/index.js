// Stack

class Stack {
  constructor() {
    this.stack = [];
  }
  push(elm) {
    this.stack.push(elm);
    return this.stack;
  }
  pop() {
    this.stack.pop();
    return this.stack;
  }
  peek(index = this.stack.length - 1) {
    return this.stack[index];
  }
  reverse() {
    return this.stack.reverse();
  }
  isEmpty() {
    return !(this.stack.length > 0);
  }
  displayStack() {
    return this.stack.join(' ');
  }
  get length() {
    return this.stack.length;
  }
}

// Queue

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(elm) {
    this.queue.push(elm);
    return this.queue;
  }
  dequeue() {
    this.queue.splice(0, 1);
    return this.queue;
  }
  peek(index = 0) {
    return this.queue[index];
  }
  isEmpty() {
    return !(this.queue.length > 0);
  }
  displayqueue() {
    return this.queue.join(' ');
  }
  get length() {
    return this.queue.length;
  }
}
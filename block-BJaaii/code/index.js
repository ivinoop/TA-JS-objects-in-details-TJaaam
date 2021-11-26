class Stack {
  constructor() {
    this.arr = [];
  }
  push(value) {
    this.arr.push(value);
    return this.arr;
  }
  pop() {
    this.arr.pop();
  }
  
}
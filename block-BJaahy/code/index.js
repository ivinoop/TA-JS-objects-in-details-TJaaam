// More about class

class Square {
  constructor (side) {
    this.width = side;
    this.height = side;
  }
  description() {
    alert(`The square is ${this.width} x ${this.height}`);
  }
  calcArea() {
    return this.height*this.width;
  }
  get area() {
    return this.calcArea();
  }
}
// Pseudoclassical Pattern

// Animal

function CreateAnimal(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
}

CreateAnimal.prototype = {
  eat() {
    return `I live in ${this.location} and I can eat`;
  },
  changeLocation(newLocation) {
    this.location = newLocation;
  },
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  }
}

// Dog

function CreateDog(name, color, location, numberOfLegs) {
  CreateAnimal.call(this, location, numberOfLegs);
  this.name = name;
  this.color = color;
}

CreateDog.prototype = {
  bark() {
    return `I am ${this.name} and I can bark 🐶`;
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColor(newColor) {
    this.color = newColor;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color}. I can also bark`;
  }
}

Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);

// Cat

function CreateCat(name, colorOfEyes, location, numberOfLegs) {
  CreateAnimal.call(this, location, numberOfLegs);
  this.name = name;
  this.colorOfEyes = colorOfEyes;
}

CreateCat.prototype = {
  meow() {
    return `I am ${this.name} and I can do meow meow 😼`;
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}

Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);

// Class Pattern

// Animal

class Animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  eat() {
    return `I live in ${this.location} and I can eat`;
  }
  changeLocation(newLocation) {
    this.location = newLocation;
  }
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  }
}

// Dog

class Dog extends Animal {
  constructor(name, color, location, numberOfLegs){
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    return `I am ${this.name} and I can bark 🐶`;
  }
  changeName(newName) {
    this.name = newName;
  }
  changeColor(newColor) {
    this.color = newColor;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

// Cat

class Cat extends Animal {
  constructor(name, colorOfEyes, location, numberOfLegs) {
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }
  meow() {
    return `I am ${this.name} and I can do mewo meow 😹`;
  }
  changeName(newName) {
    this.name = newName;
  }
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
  }
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}
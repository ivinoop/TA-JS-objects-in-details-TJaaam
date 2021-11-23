// Animal

let animalMethods = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    this.location = newLocation;
  },
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs};`
  }
}

function createAnimal(location, numberOfLegs) {
  let animal = Object.create(animalMethods);
  animal.location = location;
  animal.numberOfLegs = numberOfLegs;
  return animal;
}

// Dog

let dogMethods = {
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColor(newColor) {
    this.color = newColor;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

function createDog(name, color, location, numberOfLegs) {
  let dog = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(dog, dogMethods);
  dog.name = name;
  dog.color = color;
  return dog;
}

Object.setPrototypeOf(dogMethods, animalMethods);

// Cat

let catMethods = {
  meow() {
    alert(`I am ${this.name} and I can do meow meow 😼`);
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColorOfEyes(newColor) {
    this.color = newColor;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also meow meow`;
  }
}

function createCat(name, colorOfEyes, location, numberOfLegs) {
  let cat = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(cat, catMethods);
  cat.name = name;
  cat.color = colorOfEyes;
  return cat;
}
Object.setPrototypeOf(catMethods, animalMethods)''
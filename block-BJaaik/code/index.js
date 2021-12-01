class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {
    return `Person eats food`;
  }
  sleep() {
    return `Person sleeps well`;
  }
  walk() {
    return `Person walks well`;
  }
}

class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }
  createArt() {
    return `They create mesmerizing art of ${this.kind} type`;
  }
}

class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }
  teach() {
    return `Teacher teaches well in ${this.instituteName}`;
  }
}

class Player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }
  play() {
    return `Player plays ${this.sportsName} well`;
  }
}

class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName);
    this.teamName = teamName;
  }
  playCricket() {
    return `Cricketer plays cricket in ${this.teamName} well`;
  }
}

// Test

let artistOne = new Artist("Painting", "Ashriya", 26,  "Female");
let teacherOne = new Teacher("Ankit", 29, "Male", "AltCampus");
let cricketerOne = new Cricketer("Rahul Dravid", 48, "Male", "India", "Cricket");
let playerOne = new Player ("Sindhu P V", 26, "Female", "Badminton");
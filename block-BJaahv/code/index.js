// Using function

function person(name, id, noOfProjects) {
  let obj = {};
  obj.name = name;
  obj.id = id;
  obj.noOfProjects = noOfProjects;

  obj.getProjects = function() {
    return obj.noOfProjects;
  },

  obj.getName = function() {
    return obj.name;
  },

  obj.changeName = function(newName) {
    let oldName = obj.name;
    obj.name = newName;
    return oldName;
  },

  obj.incrementProject = function(incrementNumber) {
    obj.noOfProjects += incrementNumber;
    return obj.noOfProjects;
  },

  obj.decrementProject = function(decrementNumber) {
    obj.noOfProjects -= decrementNumber;
    return obj.noOfProjects;
  }

  return obj;
}

let person1 = person('Vinoo', 101, 10);
let person2 = person('Thestral', 102, 20);

// Prototypal Pattern

function createPerson(name, id, noOfProjects) {
  let person = Object.create(personMethods);
  person.name = name;
  person.id = id;
  person.noOfProjects = noOfProjects;
  return person;
}

let personMethods = {
  getProjects: function() {
    return this.noOfProjects;
  },

  changeName: function(newName) {
    let oldName = this.name;
    this.name = newName;
    return oldName;
  },

  incrementProject: function(incrementNumber) {
    this.noOfProjects += incrementNumber;
    return this.noOfProjects;
  },

  decrementProject: function(decrementNumber) {
    this.noOfProjects -= decrementNumber;
    return this.noOfProjects;
  }
};

let person1 = createPerson('Vinoo', 101, 10);
let person2 = createPerson('Thestral', 102, 20);

// Pseudoclassical Pattern

function CreatePerson(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}

CreatePerson.prototype = {
  getProjects() {
    return this.noOfProjects;
  },

  changeName(newName) {
    let oldName = this.name;
    this.name = newName;
    return oldName;
  },

  incrementProject(incrementNumber) {
    this.noOfProjects += incrementNumber;
    return this.noOfProjects;
  },

  decrementProject(decrementNumber) {
    this.noOfProjects -= decrementNumber;
    return this.noOfProjects;
  }
};

let person1 = new CreatePerson('Vinoo', 101, 10);
let person2 = new CreatePerson('Thestral', 102, 20);

// Class Pattern

class Person {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects() {
    return this.noOfProjects;
  }

  changeName(newName) {
    let oldName = this.name;
    this.name = newName;
    return oldName;
  }

  incrementProject(incrementNumber) {
    this.noOfProjects += incrementNumber;
    return this.noOfProjects;
  }

  decrementProject(decrementNumber) {
    this.noOfProjects -= decrementNumber;
    return this.noOfProjects;
  }
}

let person1 = new Person('Vinoo', 101, 10);
let person2 = new Person('Thestral', 102, 20);
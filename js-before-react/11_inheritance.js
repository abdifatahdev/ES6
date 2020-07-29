class Person {
  // Add special method to the class:
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}

// All teachers can walk, and we don't wanna to duplicate walk() method in person object and teacher classes
// Now how can we add walk method without duplicating walk method

// Define a teacher class and inherit from person class
//(means it will inherit all methods that are defined in person class)
// Just add the Teacher class --> extends Person
class Teacher extends Person {
  // To add teachers degree we need to add constructor
  constructor(name, degree) {
    // Whenever we add a constructor a child class,
    //we need to call the constructor of its parent class
    // which means we need to add special keyword super() that
    //reference to the parent class:
    super(name); // This will initialize the NAME property
    // Here also we need to initialize DEGREE property
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}

// To create a person object:
const person = new Person("Abdifatah");

console.log(person.walk);

const teacher = new Teacher("Mohamed", "B.S.");
console.log(teacher.degree);

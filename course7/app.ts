//
// Without interface
function greet(person: { name: string }) {
  console.log("Hello " + person.name);
}

const person = {
  name: "Max",
  age: 27
};

greet(person);

//
// Interface
interface NamedPerson {
  firstName: string;
}

function iGreet(person: NamedPerson) {
  console.log(person.firstName);
}

const person2 = {
  firstName: "Anna",
  age: 27
};

iGreet(person2);
// error
// iGreet({ firstName: "NG", age: 27 });

//
//
interface NamedPerson2 {
  firstName: string;
  age?: number; // ? = 省略可能
  [propName: string]: any; // Excess property checks
  greet(lastName: string): void; // func
}

function iGreet2(person: NamedPerson2) {
  console.log(person.firstName);
}

const person3: NamedPerson2 = {
  firstName: "Henry",
  age: 27,
  hobbies: ["Cooking", "Tennis"],
  greet(lastName: string) {
    console.log("Hi I am" + this.firstName + " " + lastName);
  }
};

iGreet2(person3);

//
// implement
class Person implements NamedPerson2 {
  firstName: string;
  greet(lastName: string) {
    console.log("Hi I am " + this.firstName + " " + lastName);
  }
}

const myPerson = new Person();
myPerson.firstName = "Test";
myPerson.greet("Anything");

//
// Function Types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(number1: number, number2: number) {
  return (number1 + number2) * 2;
};

console.log(myDoubleFunction(10, 20));

//
// interface Inheritance
interface AgedPerson extends NamedPerson2 {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 27,
  firstName: "Old",
  greet(lastName: string) {
    console.log("Hello");
  }
};

console.log(oldPerson);

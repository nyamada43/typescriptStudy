// class
class Person {
  name: string; // nameはconnstructorで初期化されているため、この行は無くてもよい。
  private type: string;
  protected age: number = 27;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("Old guy");
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Max", "max");
console.log(person);
person.printAge();

// extends
class Max extends Person {
  name = "Max";

  constructor() {
    // 継承した場合にはconstructorで必須
    super("Max", "max");
  }
}
const max = new Max();
max.printAge();

//
class Max2 extends Person {
  name = "Max2";

  constructor(username: string) {
    super("Max2", username);
  }
}
const max2 = new Max2("max");
max2.printAge();

// Inheritance
class Max3 extends Person {
  // name = "Max3";

  constructor(username: string) {
    super("Max3", username);
    this.age = 31;
  }
}
const max3 = new Max3("max");
max3.printAge();

// Getter and Setters
class Plant {
  private _species: string;

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "ABCD";
console.log(plant.species);

// Static Properties and Method
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diamter: number): number {
    return this.PI * diamter;
  }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes
abstract class Project {
  projectName: string = "Default";
  budget: number;

  // メソッド 'changeName' は abstract に指定されているため、実装を含めることができません。
  // abstract changeName(name: string) {}
  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

// 抽象クラスのインスタンスは作成できません。
// cannotBeInitiated = new Project();
class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// private constructor
class OnlyOne {
  private static instance: OnlyOne;
  public readonly name: string;

  private constructor(name: string) {
    this.name = name;
  }

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Onle one");
    }
    return OnlyOne.instance;
  }
}

// クラス 'OnlyOne' のコンストラクターはプライベートであり、クラス宣言内でのみアクセス可能です。
// let wrong = new OnlyOne("The Only One");
let right = OnlyOne.getInstance();
console.log(right.name);

// Cannot assign to 'name' because it is a read-only property.
// right.name = "Something else";

//
// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;

//   this.honk = function() {
//     console.log("Toooooooooot!");
//   };

//   this.accelerate = function(speed) {
//     this.acceleration = this.acceleration + speed;
//   };
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);
class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk() {
    console.log("Toooooooooot");
  }

  accelarate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}
let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelarate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
// console.log(rectangle.calcSize());
class BaseObject {
  width = 0;
  length = 0;
}

class Rectangle extends BaseObject {
  calcSize() {
    return this.width * this.length;
  }
}
const rectanble = new Rectangle();
console.log(rectanble.calcSize());

// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function() {
//     return this._firstName;
//   },
//   set: function(value) {
//     if (value.length > 3) {
//       this._firstName = value;
//     } else {
//       this._firstName = "";
//     }
//   },
//   enumerable: true,
//   configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);
class PersonClass {
  private _firstname: string;

  get firstName() {
    return this._firstname;
  }

  set firstName(firstName: string) {
    if (firstName.length > 3) {
      this._firstname = firstName;
    } else {
      this._firstname = "";
    }
  }
}
let personClass = new PersonClass();
personClass.firstName = "Ma";
console.log(personClass.firstName);
personClass.firstName = "Maximilian";
console.log(personClass.firstName);

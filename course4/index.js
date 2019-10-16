var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Max", "max");
console.log(person);
person.printAge();
// extends
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max() {
        var _this = 
        // 継承した場合にはconstructorで必須
        _super.call(this, "Max", "max") || this;
        _this.name = "Max";
        return _this;
    }
    return Max;
}(Person));
var max = new Max();
max.printAge();
//
var Max2 = /** @class */ (function (_super) {
    __extends(Max2, _super);
    function Max2(username) {
        var _this = _super.call(this, "Max2", username) || this;
        _this.name = "Max2";
        return _this;
    }
    return Max2;
}(Person));
var max2 = new Max2("max");
max2.printAge();
// Inheritance
var Max3 = /** @class */ (function (_super) {
    __extends(Max3, _super);
    // name = "Max3";
    function Max3(username) {
        var _this = _super.call(this, "Max3", username) || this;
        _this.age = 31;
        return _this;
    }
    return Max3;
}(Person));
var max3 = new Max3("max");
max3.printAge();
// Getter and Setters
var Plant = /** @class */ (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "ABCD";
console.log(plant.species);
// Static Properties and Method
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diamter) {
        return this.PI * diamter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
// 抽象クラスのインスタンスは作成できません。
// cannotBeInitiated = new Project();
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
// private constructor
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Onle one");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// クラス 'OnlyOne' のコンストラクターはプライベートであり、クラス宣言内でのみアクセス可能です。
// let wrong = new OnlyOne("The Only One");
var right = OnlyOne.getInstance();
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
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot");
    };
    Car.prototype.accelarate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
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
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.calcSize = function () {
        return this.width * this.leng;
    };
    Rectangle.width = 0;
    Rectangle.leng = 0;
    return Rectangle;
}());
Rectangle.width = 5;
Rectangle.leng = 2;
console.log(Rectangle.calcSize());
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
var PersonClass = /** @class */ (function () {
    function PersonClass() {
    }
    Object.defineProperty(PersonClass.prototype, "firstName", {
        get: function () {
            return this._firstname;
        },
        set: function (firstName) {
            if (firstName.length > 3) {
                this._firstname = firstName;
            }
            else {
                this._firstname = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return PersonClass;
}());
var personClass = new PersonClass();
personClass.firstName = "Ma";
console.log(personClass.firstName);
personClass.firstName = "Maximilian";
console.log(personClass.firstName);

//
// Without interface
function greet(person) {
    console.log("Hello " + person.name);
}
var person = {
    name: "Max",
    age: 27
};
greet(person);
function iGreet(person) {
    console.log(person.firstName);
}
var person2 = {
    firstName: "Anna",
    age: 27
};
iGreet(person2);
function iGreet2(person) {
    console.log(person.firstName);
}
var person3 = {
    firstName: "Henry",
    age: 27,
    hobbies: ["Cooking", "Tennis"],
    greet: function (lastName) {
        console.log("Hi I am" + this.firstName + " " + lastName);
    }
};
iGreet2(person3);
//
// implement
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Test";
myPerson.greet("Anything");
var myDoubleFunction;
myDoubleFunction = function (number1, number2) {
    return (number1 + number2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Old",
    greet: function (lastName) {
        console.log("Hello");
    }
};
console.log(oldPerson);

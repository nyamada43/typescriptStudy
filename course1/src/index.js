// string
var myName = "Max";
// number
var myAge = 27.5;
myAge = 27;
// boolean
var hasHobbies = false;
// error
// hasHobbies = 1;
// 初期時に型がない場合、動的型づけ
var myReadAge;
myReadAge = 27;
myReadAge = "27";
// any
var myReadAgeAny;
myReadAgeAny = 27;
myReadAgeAny = "27";
var myReadAgeString;
myReadAgeString = "27";
// array
var hobbies = ["cooking", "Sports"];
console.log(typeof hobbies);
// error
// hobbies = [100]
var hobbiesAny = ["cooking", "Sports"];
hobbiesAny = [100];
// tuples
var address = ["Superstreet", 90];
// error
// let addressError: [string, number] = [90, "Superstreet"]
// enum
// => implelit number assignment from zero
var Color1;
(function (Color1) {
    Color1[Color1["Gray"] = 0] = "Gray";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
var myColor1 = Color1.Green;
console.log(myColor1); // 1
var Color2;
(function (Color2) {
    Color2[Color2["Gray"] = 0] = "Gray";
    Color2[Color2["Green"] = 100] = "Green";
    Color2[Color2["Blue"] = 101] = "Blue";
})(Color2 || (Color2 = {}));
var myColor2 = Color2.Green;
console.log(myColor2); // 100
myColor2 = Color2.Blue;
console.log(myColor2); // 101
var Color3;
(function (Color3) {
    Color3[Color3["Gray"] = 0] = "Gray";
    Color3[Color3["Green"] = 100] = "Green";
    Color3[Color3["Blue"] = 2] = "Blue";
})(Color3 || (Color3 = {}));
var myColor3 = Color3.Green;
console.log(myColor3); // 100
myColor3 = Color3.Blue;
console.log(myColor3); // 2
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("HEllo");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3));
// function type
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Max",
    age: 27
};
// error
// userData = {
//   a: "Hello",
//   b: 22
// };
var userData2 = {
    name: "Max",
    age: 27
};
// complex
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types (can chain more than two types!)
var myRealAge = 27;
myRealAge = "27";
// error
// myRealAge = true;
// check types
var finalValue = "A string";
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
// never type (from typescript 2.0)
function neverReturn() {
    throw new Error("An error!");
}
// Nullable type (from typescript 2.0)
var canNotBeNull = 12;
// error
// canNotBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
// nullable
var canBeNull = 12;
canBeNull = null;
var b = {
    money: 200,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: b,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);

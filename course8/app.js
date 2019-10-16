// Simple generic
function echo(data) {
    return data;
}
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));
// Better Generic
// <T> is telling that we keep type of T
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho(27)); // <>内に明示的なタイプを宣言
console.log(betterEcho({ name: "Max", age: 27 }));
// Built-in Generics
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banna"]);
// Generic Types
var echo2 = echo;
console.log(echo2("Something"));
console.log(echo2("Something"));
// Genearic Class
// class SimpleMath<T> {
//   baseValue: T;
//   multiplyValue: T;
//   calculate(): number {
//
// error
// The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
//     return this.baseValue * this.multiplyValue;
//   }
// }
var SimpleMath2 = /** @class */ (function () {
    function SimpleMath2() {
    }
    SimpleMath2.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // 数値型にキャスト
    };
    return SimpleMath2;
}());
var simpleMath2 = new SimpleMath2();
// simpleMath2.baseValue = 10;
simpleMath2.baseValue = "10"; // castされるためOK
simpleMath2.multiplyValue = 30;
console.log(simpleMath2.calculate());
// Constraints
var SimpleMath3 = /** @class */ (function () {
    function SimpleMath3() {
    }
    SimpleMath3.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // 数値型にキャスト
    };
    return SimpleMath3;
}());
var simpleMath3 = new SimpleMath3();
simpleMath3.baseValue = 10;
// error
// simpleMath3.baseValue = "10";
simpleMath3.multiplyValue = 30;
console.log(simpleMath3.calculate());
// Constraintsは以下のようにも書ける
var SimpleMath4 = /** @class */ (function () {
    function SimpleMath4() {
    }
    SimpleMath4.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // 数値型にキャスト
    };
    return SimpleMath4;
}());
// 型 'boolean' は制約 'string | number' を満たしていません。
// const simpleMath4 = new SimpleMath4<boolean>();
var simpleMath4 = new SimpleMath4();
simpleMath4.baseValue = 10;
simpleMath4.multiplyValue = 30;
console.log(simpleMath4.calculate());
// Constraints
var SimpleMath5 = /** @class */ (function () {
    function SimpleMath5() {
    }
    SimpleMath5.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // 数値型にキャスト
    };
    return SimpleMath5;
}());
var simpleMath5 = new SimpleMath5();
simpleMath5.baseValue = "10";
simpleMath5.multiplyValue = 30;
console.log(simpleMath5.calculate());

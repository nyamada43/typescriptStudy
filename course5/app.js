var MyMath;
(function (MyMath) {
    // namespaceのネスト
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateRectable(width, length) {
        return width * length;
    }
    MyMath.calculateRectable = calculateRectable;
})(MyMath || (MyMath = {}));
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
var CircleMath = MyMath.Circle;
var PI = 2.99;
console.log(MyMath.calculateRectable(10, 20));
console.log(CircleMath.calculateCircumference(10));
console.log(PI);

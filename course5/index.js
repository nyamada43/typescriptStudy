var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
    function calculateRectable(width, length) {
        return width * length;
    }
    MyMath.calculateRectable = calculateRectable;
})(MyMath || (MyMath = {}));
var PI = 2.99;
console.log(MyMath.calculateCircumference(10));
console.log(MyMath.calculateRectable(10, 20));
console.log(PI);

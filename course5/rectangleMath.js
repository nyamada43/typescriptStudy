"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateRectable(width, length) {
        return width * length;
    }
    MyMath.calculateRectable = calculateRectable;
})(MyMath || (MyMath = {}));

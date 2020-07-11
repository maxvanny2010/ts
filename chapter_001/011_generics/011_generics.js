"use strict";
function getter(data) {
    return data;
}
console.log(getter('WFM').length); //correct => 3
//number does't have .length but is compile correct.
console.log(getter(100).length); //not correct => undefined.
/************************************************************/
function genericGetter(data) {
    return data;
}
console.log(genericGetter('WFM').length); //correct => 3
//number does't have .length not compile.
//Property 'length' does not exist on type '100'.
//console.log(genericGetter(100).length);
var arrays = [1, 2, 3];
console.log(genericGetter('WFM').length); //correct => 3
console.log(genericGetter(100).toFixed(2)); //correct => 100.00
/************************************************************/
var newGenericFunction = genericGetter;
console.log(newGenericFunction('WFM').length); //correct => 3
console.log(newGenericFunction(100).toFixed(2)); //correct => 100.00
/************************************************************/
var Multiply = /** @class */ (function () {
    function Multiply(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiply.prototype.getResult = function () {
        return +this.a * Number(this.b);
    };
    return Multiply;
}());
var nNum = new Multiply(5, 10);
console.log('NUMBER: ', nNum.getResult());
//T extent Number not compile with string
var nStr1 = new Multiply('5', '10');
console.log('NUMBER FROM STRING : ', nStr1.getResult());
//without T extent Number =>NaN
//T extent Number not compile with string
var nStr2 = new Multiply('hello', '10');
console.log('STRING : ', nStr2.getResult());
//# sourceMappingURL=011_generics.js.map
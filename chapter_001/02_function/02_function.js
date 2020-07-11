"use strict";
var myName = 'WFM';
var myAge = 50;
function getMyName() {
    return myName;
}
console.log(getMyName());
function getMyAge() {
    return myAge;
}
console.log(getMyAge());
function plusToMyAge(age) {
    return myAge + age;
}
console.log(plusToMyAge(50));
function plusWithStringToMyAge(age, prefix) {
    if (prefix === void 0) { prefix = 'Default string'; }
    return prefix + (myAge + age);
}
console.log(plusWithStringToMyAge(50, 'I old: '));
function consoleLog(str) {
    console.log(str);
}
consoleLog('I have\'t any to return');
//ES6
var fun1 = function () { return 1 + 1; };
var fun2 = function () {
    return 1 + 1;
};
var mySum;
function sum(x, y) {
    return x + y;
}
mySum = sum;
console.log(mySum(5, 5) + ' :mySum');
//# sourceMappingURL=02_function.js.map
const myName: string = 'WFM';
const myAge: number = 50;

function getMyName(): string {
    return myName;
}

console.log(getMyName());

function getMyAge(): number {
    return myAge;
}

console.log(getMyAge());

function plusToMyAge(age: number): number {
    return myAge + age;
}

console.log(plusToMyAge(50));

function plusWithStringToMyAge(age: number, prefix: string = 'Default string'): string {
    return prefix + (myAge + age);
}

console.log(plusWithStringToMyAge(50, 'I old: '));

function consoleLog(str: string): void {
    console.log(str);
}

consoleLog('I have\'t any to return');
//ES6
const fun1 = () => 1 + 1;
const fun2 = function () {
    return 1 + 1
};

let mySum: (num1: number, num2: number) => number;

function sum(x: number, y: number): number {
    return x + y;
}

mySum = sum;
console.log(mySum(5, 5) + ' :mySum');



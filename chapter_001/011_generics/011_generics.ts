function getter(data: any) {
    return data;
}

console.log(getter('WFM').length);//correct => 3
//number does't have .length but is compile correct.
console.log(getter(100).length);//not correct => undefined.
/************************************************************/
function genericGetter<T>(data: T): T {
    return data;
}

console.log(genericGetter('WFM').length);//correct => 3
//number does't have .length not compile.
//Property 'length' does not exist on type '100'.
//console.log(genericGetter(100).length);
const arrays: Array<number> = [1, 2, 3];
console.log(genericGetter<string>('WFM').length);//correct => 3
console.log(genericGetter<number>(100).toFixed(2));//correct => 100.00
/************************************************************/
const newGenericFunction: <T>(data: T) => T = genericGetter;
console.log(newGenericFunction<string>('WFM').length);//correct => 3
console.log(newGenericFunction<number>(100).toFixed(2));//correct => 100.00
/************************************************************/
class Multiply<T extends number | string> {
    constructor(private a: T, private b: T) {
    }

    getResult(): number {
        return +this.a * Number(this.b);
    }
}

const nNum = new Multiply(5, 10);
console.log('NUMBER: ', nNum.getResult());
//T extent Number not compile with string
const nStr1 = new Multiply('5', '10');
console.log('NUMBER FROM STRING : ', nStr1.getResult());
//without T extent Number =>NaN
//T extent Number not compile with string
const nStr2 = new Multiply('hello', '10');
console.log('STRING : ', nStr2.getResult());
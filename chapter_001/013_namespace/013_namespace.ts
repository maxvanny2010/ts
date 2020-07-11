namespace Util {
    export function isEmpty(d: any): boolean {
        return !d;
    }
    function isUndefined(d: any): boolean {
        return typeof d === 'undefined';
    }

    export const PI = Math.PI;
    export const EX = Math.E;
}
const EX = 'EX';
console.log(Util.isEmpty(''));
console.log(Util.isEmpty('test'));
console.log(Util.PI);
console.log(EX);
console.log(Util.EX);


namespace Util {
    export function isEmpties(d: any): boolean {
        return !d;
    }
    function isUndefined(d: any): boolean {
        return typeof d === 'undefined';
    }
}
console.log(Util.isEmpties(''));
console.log(Util.isEmpties('test'));


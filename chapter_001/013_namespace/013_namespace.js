"use strict";
var Util;
(function (Util) {
    function isEmpty(d) {
        return !d;
    }
    Util.isEmpty = isEmpty;
    function isUndefined(d) {
        return typeof d === 'undefined';
    }
    Util.PI = Math.PI;
    Util.EX = Math.E;
})(Util || (Util = {}));
var EX = 'EX';
console.log(Util.isEmpty(''));
console.log(Util.isEmpty('test'));
console.log(Util.PI);
console.log(EX);
console.log(Util.EX);
//# sourceMappingURL=013_namespace.js.map
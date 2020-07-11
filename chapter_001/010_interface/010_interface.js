"use strict";
/*function getLength(variable: any): void {
    console.log('getLength', variable.length)
}*/
/*function getLength(variable: { length: number }): void {
    console.log('getLength', variable.length)//get field
}*/
function getLength(variable) {
    console.log('getLength', variable.length); //get interface
}
getLength([1, 2, 3, 4, 5]); //5
var box = {
    name: 'WFM',
    // BoxLength: 20,//undefined
    length: 20
}; //20
getLength(box); //20
var customer = {
    name: 'WFM',
    age: 20,
    logInfo: function (info) {
        console.log('INFO: ', info);
    }
};
customer.logInfo('to buy');
var custom = /** @class */ (function () {
    function custom() {
        this.name = 'user';
    }
    custom.prototype.logInfo = function (info) {
        console.log(info);
    };
    custom.prototype.getYear = function () {
        return 2020;
    };
    return custom;
}());
//# sourceMappingURL=010_interface.js.map
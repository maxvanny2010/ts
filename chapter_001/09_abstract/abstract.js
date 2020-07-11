"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
        this.model = '';
        this.year = 0;
    }
    Car.prototype.getYear = function () {
        return this.year;
    };
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, year) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.year = year;
        return _this;
    }
    BMW.prototype.logInfo = function (info) {
        console.log('INFO: ' + info + 'MODEL: ' + this.model + ' ' + 'YEAR: ' + this.year);
    };
    return BMW;
}(Car));
var bmw = new BMW('5', 2020);
bmw.logInfo('NEW ADS => ');
console.log(bmw.getYear());
console.log(bmw);
//# sourceMappingURL=abstract.js.map
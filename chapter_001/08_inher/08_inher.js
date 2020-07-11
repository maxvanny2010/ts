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
var Magazine = /** @class */ (function () {
    function Magazine(name, boss) {
        this.name = name;
        this.boss = boss;
        this.isNew = false;
        this.code = 5;
    }
    Magazine.prototype.getCode = function () {
        return this.code + '';
    };
    return Magazine;
}());
var Ads = /** @class */ (function (_super) {
    __extends(Ads, _super);
    function Ads(name, boss, price, rows, text) {
        var _this = _super.call(this, name, boss) || this;
        _this.name = name;
        _this.boss = boss;
        _this.price = price;
        _this.rows = rows;
        _this.text = text;
        _this.isNew = true;
        _this.code = 10;
        return _this;
    }
    Ads.prototype.getCode = function () {
        return 'GET CODE: ' + this.code;
    };
    return Ads;
}(Magazine));
var ads = new Ads('Magazine July', 'user', 100, 10, 'buy A and B');
console.log('GET ADS: ');
console.log(ads);
console.log(ads.getCode());
//# sourceMappingURL=08_inher.js.map
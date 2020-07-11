"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logger(constrFunc) {
    console.log(constrFunc);
}
function shouldLog(flag) {
    return flag ? logger : null;
}
var Tmp = /** @class */ (function () {
    function Tmp(name, age) {
        this.name = name;
        this.age = age;
        console.log('I tmp');
    }
    Tmp = __decorate([
        shouldLog(true)
    ], Tmp);
    return Tmp;
}());
/***********************************************************/
function addCustomTag(constrFn) {
    constrFn.prototype.showHtml = function () {
        var pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(this);
        document.body.appendChild(pre);
    };
}
var Tmp1 = /** @class */ (function () {
    function Tmp1(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    Tmp1 = __decorate([
        addCustomTag
    ], Tmp1);
    return Tmp1;
}());
var tmp1 = new Tmp1('TMP1', 20, 'Frontend');
console.log(tmp1);
tmp1.showHtml();
//# sourceMappingURL=012_decorator.js.map
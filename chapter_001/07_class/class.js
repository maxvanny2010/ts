"use strict";
var Message = /** @class */ (function () {
    function Message(name, author) {
        this.name = name;
        this.author = author;
        this.rows = 0;
        this.isNew = true;
    }
    Message.prototype.getIsNew = function () {
        return this.isNew;
    };
    Message.prototype.isNews = function () {
        return this.getIsNew();
    };
    Message.prototype.setRows = function (rows) {
        this.rows = rows;
    };
    Message.prototype.getRows = function () {
        return this.rows;
    };
    return Message;
}());
var msg = new Message('WFM', "Boss");
console.log(msg);
console.log('ROWS: ' + msg.getRows());
msg.setRows(200);
console.log('NEW ROWS: ' + msg.getRows());
console.log('GET PRIVATE FUNCTION: ' + msg.isNews());
//# sourceMappingURL=class.js.map
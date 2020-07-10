"use strict";
var arr = [1, '2'];
var user = {
    name: 'WFM',
    age: 50,
    jobs: ['a', 'b'],
    logName: function () {
        console.log(this.name);
    },
    getJobs: function () {
        return this.jobs;
    }
};
var user2 = {
    name: 'Max',
    age: 30,
    jobs: ['2'],
    logName: function () {
        console.log(this.name);
    },
};
//# sourceMappingURL=04_objects.js.map
"use strict";
var post = {
    name: 'WFM',
    time: '21:00',
};
function logPost(post) {
    console.log(post.name + ' ' + post.time);
}
//prevent error compile with mistake noEmitOnError(config json)
//logPost(post + '');
logPost(post);
//# sourceMappingURL=05_configJson.js.map
//the same rows ts and js sourceMap(config json)
type Post = { name: string, time: string };
let post: Post = {
    name: 'WFM',
    time: '21:00',
};
function logPost(post:Post):void {
    console.log(post.name + ' ' + post.time);
}
//prevent error compile with mistake noEmitOnError(config json)
//logPost(post + '');
logPost(post);
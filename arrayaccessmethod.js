var newHolder = ['cat','dog','rabbit','bird'];
var postIndex = newHolder.indexOf('cat');

var q = prompt('what did you want to look for?');

var p = newHolder.indexOf(q);

var message = p > -1?'found':'not there';

console.log(message);














RegExp.prototype.constructor = ""
var r = /a/;
assert (r.test ("a"));

RegExp.prototype.constructor = {}
r = /b/;
assert (r.test ("b"));

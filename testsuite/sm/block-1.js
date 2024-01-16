

var f = () => {};
assertEq(f(), undefined);
var g = () => ({});
assertEq(typeof g(), 'object');

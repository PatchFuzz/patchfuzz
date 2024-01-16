

var f = (a) => 2 * a;  
assertEq(f(12), 24);
var g = (a, b) => a + b;
assertEq([1, 2, 3, 4, 5].reduce((a, b) => a + b), 15);




var wm = new WeakMap();
var bar = {};
assertEq(wm.set(bar, 'BAR'), wm);
var foo = {};
var a = wm.set(foo, 'FOO').get(foo);
assertEq(a, 'FOO');





load(libdir + "asserts.js");

var a = [0, 1, 2, 3];
var p = new Proxy({}, {});
Reflect.set(p, "length", 2, a);
assertEq("length" in p, false);
assertEq(a.length, 2);
assertDeepEq(a, [0, 1]);

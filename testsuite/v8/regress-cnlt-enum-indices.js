




























var o = {};
var o2 = {};

o.a = 1;
o2.a = 1;
function f() { return 10; }

Object.defineProperty(o, "b", { get: f, enumerable: true });
Object.defineProperty(o2, "b", { get: f, enumerable: true });
assertTrue(%HaveSameMap(o, o2));
o.c = 2;

for (var x in o) { }
o = null;

gc();

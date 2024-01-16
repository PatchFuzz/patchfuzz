




























setter = function(x) { return; }
var o = {};
Object.defineProperty(o, "foo", { set: setter });
var x = {};
Object.defineProperty(x, "foo", { set: setter });
x.bar = 20;
x = {};
gc();
o.foo = 20;
assertEquals(undefined, o.foo);

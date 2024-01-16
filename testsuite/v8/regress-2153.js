


























var o = {};
o.__defineGetter__('foo', function () { return null; });
var o = {};
o.foo = 42;
assertEquals(42, o.foo);

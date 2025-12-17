var o = {};
o.__defineGetter__('foo', function () { return null; });
var o = {};
o.foo = 42;
print(42, o.foo);

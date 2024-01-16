































Object.prototype.__defineGetter__('constructor', function() { throw 42; });

function f() {}
assertSame(f, f.prototype.constructor);

var o = new f();
assertSame(f, o.constructor);

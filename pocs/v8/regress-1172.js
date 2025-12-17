Object.prototype.__defineGetter__('constructor', function() { throw 42; });

function f() {}
print(f, f.prototype.constructor);

var o = new f();
print(f, o.constructor);

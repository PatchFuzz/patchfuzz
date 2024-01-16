



function f() { return arguments; }
var o = f();
o.length = -100;
Array.prototype.slice.call(o);

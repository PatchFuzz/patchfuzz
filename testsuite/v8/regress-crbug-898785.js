





var a = [0, 1];
var o = { [Symbol.toPrimitive]() { a.length = 1; return 2; } };

a.push(2);
a.lastIndexOf(5, o);

var f = new Function('x', 'var f = 3; if (x) function f() {}; return f');
print(f(false), 3);
print(typeof f(true), "function");

var f = new Function('x', '"use strict"; x = 3; return arguments[0]');
print(f(42), 42);

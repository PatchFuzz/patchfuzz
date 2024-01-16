



























function F() {}
var a = new F();
function f(i) { return a[i](); }

a.first = function() { return 11; }
a[0] = function() { return 22; }
var obj = {};
a[obj] = function() { return 33; }


a.foo = 0;
delete a.foo;

var b = "first";
f(b);
f(b);

assertEquals(11, f(b));
assertEquals(22, f(0));
assertEquals(33, f(obj));







var a = {}
var b = {}
a.x = 1;
a.y = 1;
b.x = 1;

function foo(c) {
  var s = 0;
  for (var p in c) { s++; }
  return s;
}
%PrepareFunctionForOptimization(foo);

assertEquals(2, foo(a));
assertEquals(1, foo(b));
%OptimizeFunctionOnNextCall(foo);
assertEquals(2, foo(a));
assertEquals(1, foo(b));

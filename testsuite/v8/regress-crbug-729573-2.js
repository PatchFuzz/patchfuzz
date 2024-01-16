





function bar(x) {
  "use strict";
  return this + x;
}

function foo(f) {
  var a = bar.bind(42, 1);
  return f() ? 0 : a;
};
%PrepareFunctionForOptimization(foo);
function t() {
  return true;
}

assertEquals(0, foo(t));
assertEquals(0, foo(t));
%OptimizeFunctionOnNextCall(foo);
var a = foo(_ => false);
assertEquals(43, a());

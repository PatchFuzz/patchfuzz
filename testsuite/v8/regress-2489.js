




























"use strict";

function f(a, b) {
  return g("c", "d");
};
%PrepareFunctionForOptimization(f);
function g(a, b) {
  g.constructor.apply(this, arguments);
}

g.constructor = function(a, b) {
  assertEquals("c", a);
  assertEquals("d", b);
};

f("a", "b");
f("a", "b");
%OptimizeFunctionOnNextCall(f);
f("a", "b");
g.x = "deopt";
f("a", "b");










function f(a, b, c) {
  "use strict";
  return Reflect.set({});
}




;
%PrepareFunctionForOptimization(f);
function g() {
  return f() + '-no-tail';
}

assertEquals("true-no-tail", g());
%OptimizeFunctionOnNextCall(f);
assertEquals("true-no-tail", g());

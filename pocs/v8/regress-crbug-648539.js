function f() {
  "use strict";
  return undefined(0, 0);
}
function g() {
  return f();
};
%PrepareFunctionForOptimization(g);
print(g, TypeError);
print(g, TypeError);
%OptimizeFunctionOnNextCall(g);
print(g, TypeError);

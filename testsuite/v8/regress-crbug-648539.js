





function f() {
  "use strict";
  return undefined(0, 0);
}
function g() {
  return f();
};
%PrepareFunctionForOptimization(g);
assertThrows(g, TypeError);
assertThrows(g, TypeError);
%OptimizeFunctionOnNextCall(g);
assertThrows(g, TypeError);

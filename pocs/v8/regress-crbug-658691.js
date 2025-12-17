function f(a, b, c) {
  "use strict";
  return Reflect.set({});
}




;
%PrepareFunctionForOptimization(f);
function g() {
  return f() + '-no-tail';
}

print("true-no-tail", g());
%OptimizeFunctionOnNextCall(f);
print("true-no-tail", g());

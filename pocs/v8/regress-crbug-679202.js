var x = Object.prototype;

function f() {
  return x <= x;
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();

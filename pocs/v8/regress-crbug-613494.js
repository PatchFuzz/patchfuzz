function f() {
  var bound = 0;
  function g() {
    return bound;
  }
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();

function f() {
  var a = new Set().values();
  a.outOfObjectProperty = undefined;
  %DeoptimizeNow();
  return !a;
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();

var global = new Object(3);
function f() {
  global[0] = global[0] >>> 15.5;
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();

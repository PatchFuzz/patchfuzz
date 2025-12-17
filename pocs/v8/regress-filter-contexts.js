function f() {
  return f.x;
};
%PrepareFunctionForOptimization(f);
f.__proto__ = null;
f.prototype = "";

f();
f();
%OptimizeFunctionOnNextCall(f);
f();







function f() {
  return arguments.length;
};
%PrepareFunctionForOptimization(f);
var a = [];
%OptimizeFunctionOnNextCall(f);
a.length = 81832;
f(...a);

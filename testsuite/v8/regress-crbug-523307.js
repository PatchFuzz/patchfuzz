





function f(x) {
  var c = x * x << 366;
  var a = c + c;
  return a;
};
%PrepareFunctionForOptimization(f);
f(1);
f(1);
%OptimizeFunctionOnNextCall(f);
f(1);

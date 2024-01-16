































function f(x) {
  return Math.sqrt(x);
};
%PrepareFunctionForOptimization(f);
var x = 7.0506280066499245e-233;

var a = f(x);

f(0.1);
f(0.2);
%OptimizeFunctionOnNextCall(f);

var b = f(x);

assertEquals(a, b);

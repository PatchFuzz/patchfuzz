




var a = new Array(128);

function f(a, base) {
  a[base] = 2;
};
%PrepareFunctionForOptimization(f);
f(a, undefined);
f("r12", undefined);
f(a, 0);
%OptimizeFunctionOnNextCall(f);
f(a, 0);

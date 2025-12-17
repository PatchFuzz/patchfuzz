function f() {
  f[0 + ''];
}

%PrepareFunctionForOptimization(f);
f();
%OptimizeMaglevOnNextCall(f);
f();
%OptimizeFunctionOnNextCall(f);
f();

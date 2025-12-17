function f() {
  function t() {}
  return t();
}

%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();

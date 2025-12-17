function f0() {
  return Array(([f0,f0,f0])[1]).indexOf();
}

%PrepareFunctionForOptimization(f0);
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();

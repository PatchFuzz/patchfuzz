function f0() {
  const v0 = () => {};
  function f1(v1) {
    return v0[v1];
  }
  f1("c" + "c");
  f1("c" + "c");
  f1();
}

%PrepareFunctionForOptimization(f0);
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();

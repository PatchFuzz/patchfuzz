





{
  function f() {
    const b = BigInt.asUintN(4,3n);
    let i = 0;
    while(i < 1) {
      i + 1;
      i = b;
    }
  }

  %PrepareFunctionForOptimization(f);
  f();
  f();
  %OptimizeFunctionOnNextCall(f);
  f();
}


{
  function f() {
    const b = BigInt.asUintN(4,10n);
    let i = 0.1;
    while(i < 1.8) {
      i + 1;
      i = b;
    }
  }

  %PrepareFunctionForOptimization(f);
  f();
  f();
  %OptimizeFunctionOnNextCall(f);
  f();
}

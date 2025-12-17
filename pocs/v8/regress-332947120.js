function foo() {
  with ([]) {
    const o = {
      valueOf() {},
    };
  }
}

%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();

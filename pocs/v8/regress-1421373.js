function foo() {
  const o5 = {
    "apply": undefined,
    o() {
        super.valueOf();
    },
  };
}

%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();

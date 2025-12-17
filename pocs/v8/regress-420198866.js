function foo() {
  try {
    const v = class {}();
  } catch (e) {
    print('boom');
  }
}
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeMaglevOnNextCall(foo);
foo();

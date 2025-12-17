function foo() {
  for (let i = 0; i < 2; i++) {
     (a[2] + 20) | 0;
  }
}

const a = new Float32Array(1000);
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();

function foo(dv) {
  for (let i = -1; i < 1; ++i) {
    dv.setUint16(i % 1);
  }
}

const dv = new DataView(new ArrayBuffer(2));
%PrepareFunctionForOptimization(foo);
foo(dv);
foo(dv);
%OptimizeFunctionOnNextCall(foo);
foo(dv);

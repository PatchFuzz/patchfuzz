





var a = new Int32Array(2);

function foo(base) {
  a[base - 91] = 1;
};
%PrepareFunctionForOptimization(foo);
foo("");
foo("");
%OptimizeFunctionOnNextCall(foo);
foo(NaN);
assertEquals(0, a[0]);

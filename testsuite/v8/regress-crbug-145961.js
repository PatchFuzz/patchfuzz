




























function test() {
  var a = new Int32Array(2);
  var x = a[0];
  return Math.min(x, x);
};
%PrepareFunctionForOptimization(test);
assertEquals(0, test());
assertEquals(0, test());
%OptimizeFunctionOnNextCall(test);
assertEquals(0, test());

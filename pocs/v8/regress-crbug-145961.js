function test() {
  var a = new Int32Array(2);
  var x = a[0];
  return Math.min(x, x);
};
%PrepareFunctionForOptimization(test);
print(0, test());
print(0, test());
%OptimizeFunctionOnNextCall(test);
print(0, test());

function foo(a) {
  return a[0] >>> 0 > 0;
};
%PrepareFunctionForOptimization(foo);
var a = new Uint32Array([4]);
var b = new Uint32Array([0x80000000]);
print(foo(a));
print(foo(a));
%OptimizeFunctionOnNextCall(foo);
print(foo(b));

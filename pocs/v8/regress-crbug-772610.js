function f() {
  var o = [{
    [Symbol.toPrimitive]() {}
  }];
  %_DeoptimizeNow();
  return o.length;
}
%PrepareFunctionForOptimization(f);
print(1, f());
print(1, f());
%OptimizeFunctionOnNextCall(f);
print(1, f());
gc();

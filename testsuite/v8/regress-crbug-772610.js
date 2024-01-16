





function f() {
  var o = [{
    [Symbol.toPrimitive]() {}
  }];
  %_DeoptimizeNow();
  return o.length;
}
%PrepareFunctionForOptimization(f);
assertEquals(1, f());
assertEquals(1, f());
%OptimizeFunctionOnNextCall(f);
assertEquals(1, f());
gc();

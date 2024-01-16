





function foo() {
  var a = [1, 2.3, , 4.2];
  %_DeoptimizeNow();
  return a[2];
}
%PrepareFunctionForOptimization(foo);
assertSame(undefined, foo());
assertSame(undefined, foo());
%OptimizeFunctionOnNextCall(foo)
assertSame(undefined, foo());

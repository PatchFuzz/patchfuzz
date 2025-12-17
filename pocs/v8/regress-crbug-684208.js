function foo() {
  var a = [1, 2.3, , 4.2];
  %_DeoptimizeNow();
  return a[2];
}
%PrepareFunctionForOptimization(foo);
print(undefined, foo());
print(undefined, foo());
%OptimizeFunctionOnNextCall(foo)
print(undefined, foo());

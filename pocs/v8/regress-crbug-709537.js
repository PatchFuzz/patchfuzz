function foo() {
  return { 0: {}, x: {} };
};
%PrepareFunctionForOptimization(foo);
var ref = foo();
print(ref, foo());
print(ref, foo());
%OptimizeFunctionOnNextCall(foo);
print(ref, foo());

function foo() {
  new Array().pop();
};
%PrepareFunctionForOptimization(foo);
print(undefined, foo());
print(undefined, foo());
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo());

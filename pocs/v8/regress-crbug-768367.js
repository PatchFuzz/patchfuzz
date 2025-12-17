const o = {};

function foo() {
  return o[4294967295];
};
%PrepareFunctionForOptimization(foo);
print(undefined, foo());
print(undefined, foo());
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo());

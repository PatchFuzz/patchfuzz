





function foo() {
  return { ['bar']: class {} };
}
%PrepareFunctionForOptimization(foo);
print('bar', foo().bar.name);
print('bar', foo().bar.name);
%OptimizeFunctionOnNextCall(foo);
print('bar', foo().bar.name);

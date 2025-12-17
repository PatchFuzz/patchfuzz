var undetectable = %GetUndetectable();

function foo(a) {
  const o = a ? foo : undetectable;
  return typeof o === 'function';
};
%PrepareFunctionForOptimization(foo);
print(foo(false));
print(foo(false));
%OptimizeFunctionOnNextCall(foo);
print(foo(false));

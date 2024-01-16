





var undetectable = %GetUndetectable();

function foo(a) {
  const o = a ? foo : undetectable;
  return typeof o === 'function';
};
%PrepareFunctionForOptimization(foo);
assertFalse(foo(false));
assertFalse(foo(false));
%OptimizeFunctionOnNextCall(foo);
assertFalse(foo(false));

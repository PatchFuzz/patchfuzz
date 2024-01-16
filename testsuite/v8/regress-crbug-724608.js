





function foo(x) {
  return {['p']: 0, x};
};
%PrepareFunctionForOptimization(foo);
foo();
var a = {['p']: ''};
%OptimizeFunctionOnNextCall(foo);
foo();

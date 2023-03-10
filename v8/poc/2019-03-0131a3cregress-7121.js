





function foo() { %ToLength(42n) }
%PrepareFunctionForOptimization(foo);
print(foo, TypeError);
%OptimizeFunctionOnNextCall(foo);
print(foo, TypeError);

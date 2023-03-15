





function bar() { return 0/0 && 1; }
%PrepareFunctionForOptimization(bar);
print(NaN, bar());
%OptimizeFunctionOnNextCall(bar);
print(NaN, bar());

function foo() { return 0/0 || 1; }
%PrepareFunctionForOptimization(foo);
print(1, foo());
%OptimizeFunctionOnNextCall(foo);
print(1, foo());

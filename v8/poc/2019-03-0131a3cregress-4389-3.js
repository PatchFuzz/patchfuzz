





function foo(x) { Math.floor(x); }
%PrepareFunctionForOptimization(foo);
foo(1);
foo(2);
%OptimizeFunctionOnNextCall(foo);
print(function() { foo(Symbol()) }, TypeError);

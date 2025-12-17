function foo(t) { return 'a'.concat(t); }

%PrepareFunctionForOptimization(foo);
foo(1);
foo(1);
%OptimizeFunctionOnNextCall(foo);
foo(1);
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo(1);
print(foo);

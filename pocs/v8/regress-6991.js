function foo(o) { return o.x; }

%PrepareFunctionForOptimization(foo);
print(undefined, foo({}));
print(undefined, foo(1));
print(undefined, foo({}));
print(undefined, foo(1));
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo({}));
print(foo);
print(undefined, foo(1));
print(foo);

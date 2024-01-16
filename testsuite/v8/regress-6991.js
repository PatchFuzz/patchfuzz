





function foo(o) { return o.x; }

%PrepareFunctionForOptimization(foo);
assertEquals(undefined, foo({}));
assertEquals(undefined, foo(1));
assertEquals(undefined, foo({}));
assertEquals(undefined, foo(1));
%OptimizeFunctionOnNextCall(foo);
assertEquals(undefined, foo({}));
assertOptimized(foo);
assertEquals(undefined, foo(1));
assertOptimized(foo);

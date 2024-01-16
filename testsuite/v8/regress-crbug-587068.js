







function foo(i) { return String.fromCharCode(i); }
%PrepareFunctionForOptimization(foo);
foo(33);
foo(33);
%OptimizeFunctionOnNextCall(foo);
foo(33.3);
assertOptimized(foo);

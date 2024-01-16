





function foo() { return -"0" }
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
assertOptimized(foo);

function bar() { return -"1" }
%PrepareFunctionForOptimization(bar);
bar();
%OptimizeFunctionOnNextCall(bar);
bar();
assertOptimized(bar);

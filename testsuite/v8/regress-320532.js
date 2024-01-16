






























function bar() { return new Array(); }
%PrepareFunctionForOptimization(bar);
bar();
bar();
%OptimizeFunctionOnNextCall(bar);
a = bar();
function foo(len) { return new Array(len); }
%PrepareFunctionForOptimization(foo);
foo(0);
foo(0);
%PrepareFunctionForOptimization(bar);
%OptimizeFunctionOnNextCall(bar);
foo(0);

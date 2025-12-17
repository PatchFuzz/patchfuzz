function foo(a) {
  "use strict";
  if (a) return arguments[1];
}

%PrepareFunctionForOptimization(foo);
foo(false);
foo(false);
%OptimizeFunctionOnNextCall(foo);
foo(true, 1);
%PrepareFunctionForOptimization(foo);
foo(true, 1);
%OptimizeFunctionOnNextCall(foo);
foo(false);
foo(true, 1);
print(foo);

function callback() {
  "use strict"
}

function foo(x) {
  
  
  x = x << 1;
  [""].forEach(callback, x);
}

%PrepareFunctionForOptimization(callback);
%PrepareFunctionForOptimization(foo);
foo(0);
foo(0);
%OptimizeFunctionOnNextCall(foo);
foo(0);

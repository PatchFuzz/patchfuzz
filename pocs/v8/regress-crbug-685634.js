"use strict";

function foo(f) {
  return f.apply(this, arguments);
};
%PrepareFunctionForOptimization(foo);
function bar() {}

foo(bar);
%OptimizeFunctionOnNextCall(foo);
foo(bar);

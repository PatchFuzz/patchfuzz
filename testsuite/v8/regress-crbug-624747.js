





"use strict";

function bar() {
  try {
    unref;
  } catch (e) {
    return 1 instanceof TypeError && unref();  
  }
}

function foo() {
  return bar();  
};
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo();

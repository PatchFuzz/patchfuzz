





'use strict';

function foo(obj, ...args) {
  obj['apply'](...args);
}

var x = 0;

function bar() {
  try {
    this.x;
  } catch (e) {
    x++;
  }
}

%PrepareFunctionForOptimization(foo);
foo(bar);

%OptimizeMaglevOnNextCall(foo);
foo(bar);

print(2, x);

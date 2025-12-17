"use strict";

var B = class extends Int32Array {};

function f(b) {
  if (b) {
    null instanceof B;
  }
};
%PrepareFunctionForOptimization(f);
f();
f();
f();
%OptimizeFunctionOnNextCall(f);
f();

function f2() {
  return new B();
};
%PrepareFunctionForOptimization(f2);
%OptimizeFunctionOnNextCall(f2);
f2();

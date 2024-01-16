





"use strict";

function f(x) {
  return x;
}

function g(x) {
  return false ? 0 : f(x, 1);
}

function h(x) {
  var z = g(x, 1);
  return z + 1;
};
%PrepareFunctionForOptimization(h);

h(1);
h(1);
%OptimizeFunctionOnNextCall(h);
h("a");

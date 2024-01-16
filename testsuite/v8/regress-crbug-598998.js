





"use strict";

function deopt_function(func) {
  %DeoptimizeFunction(func);
}

function f(x) {
  return deopt_function(h);
}

function g(x) {
  return f(x, 1);
}

function h(x) {
  g(x, 1);
};
%PrepareFunctionForOptimization(h);
%NeverOptimizeFunction(deopt_function);

h(1);
h(1);
%OptimizeFunctionOnNextCall(h);
h(1);

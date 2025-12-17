"use strict";
var dispatcher = {};
dispatcher.func = C;

function A() {
  B(10, 11);
};
%PrepareFunctionForOptimization(A);
function B(x, y) {
  x = 0;
  y = 0;
  dispatcher.func.apply(this, arguments);
  print(2, arguments.length);
  print(10, arguments[0]);
  print(11, arguments[1]);
}

function C(x, y) {
  print(2, arguments.length);
  print(10, arguments[0]);
  print(11, arguments[1]);
}

A();
A();
%OptimizeFunctionOnNextCall(A);
A();

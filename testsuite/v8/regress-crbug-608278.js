





"use strict";

function h() {
  var stack = new Error('boom').stack;
  print(stack);
  %DeoptimizeFunction(f1);
  %DeoptimizeFunction(f2);
  %DeoptimizeFunction(f3);
  %DeoptimizeFunction(g);
  %DeoptimizeFunction(h);
  return 1;
}
%NeverOptimizeFunction(h);

function g(v) {
  return h();
}


function f1() {
  var o = {};
  o.__defineGetter__('p', g);
  o.p;
};
%PrepareFunctionForOptimization(f1);
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
f1();


function f2() {
  var o = {};
  o.__defineSetter__('q', g);
  o.q = 1;
};
%PrepareFunctionForOptimization(f2);
f2();
f2();
%OptimizeFunctionOnNextCall(f2);
f2();


function A() {
  return h();
}

function f3() {
  new A();
};
%PrepareFunctionForOptimization(f3);
f3();
f3();
%OptimizeFunctionOnNextCall(f3);
f3();

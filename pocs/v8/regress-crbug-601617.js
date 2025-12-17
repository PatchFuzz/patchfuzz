function h() {
  var res = g.arguments[0].x;
  return res;
}

function g(o) {
  var res = h();
  return res;
}

function f1() {
  var o = {x: 1};
  var res = g(o);
  return res;
}

function f0() {
  "use strict";
  return f1(5);
};
%PrepareFunctionForOptimization(f0);
%NeverOptimizeFunction(h);
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
print(1, f0());

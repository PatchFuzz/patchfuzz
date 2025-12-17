function h() {
  var res = g.arguments;
  return res;
}

function g(o) {
  var res = h();
  return res;
}

function f1() {
  var o = {x: 42};
  var res = g(o);
  return 1;
}

function f0(a, b) {
  "use strict";
  return f1(5);
};
%PrepareFunctionForOptimization(f0);
function boom(b) {
  if (b) throw new Error("boom!");
};
%PrepareFunctionForOptimization(boom);
%NeverOptimizeFunction(h);
f0();
f0();
%OptimizeFunctionOnNextCall(f0);

boom(false);
boom(false);
%OptimizeFunctionOnNextCall(boom);

try {
  f0(1, 2, 3);
  boom(true, 1, 2, 3);
} catch (e) {
}

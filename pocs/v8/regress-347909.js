var a = {y: 1.5};
a.y = 0;
var b = a.y;
a.y = {};
var d = 1;
function f() {
  d = 0;
  return {y: b};
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();

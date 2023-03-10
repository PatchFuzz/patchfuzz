





var v1 = {};
v1 = 0;
var v2 = {};
v2 = 0;
gc();

var minus_zero = {z: -0.0}.z;
var nan = undefined + 1;
function f() {
  v1 = minus_zero;
  v2 = nan;
};
%PrepareFunctionForOptimization(f);
;
%OptimizeFunctionOnNextCall(f);
f();
gc();  

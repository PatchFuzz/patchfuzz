





var v = /abc/;
function f() {
  v = 1578221999;
};
%PrepareFunctionForOptimization(f);
;
%OptimizeFunctionOnNextCall(f);
f();

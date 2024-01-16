





"use strict";
function f1(d) {
  return 1 + f2(f3(d));
};
%PrepareFunctionForOptimization(f1);
function f2(v) {
  return v;
}

function f3(d) {
  if (d) %DeoptimizeFunction(f1);
  return 2;
}

%NeverOptimizeFunction(f3);

f1(false);
f1(false);
%OptimizeFunctionOnNextCall(f1);
assertEquals(3, f1(true));































"use strict";

function f0() {
  return f1('literal', true);
};
%PrepareFunctionForOptimization(f0);
function f1(x, y) {
  return f2(x, y);
}







function f2(x, y) {
  if (y) {
    if (f3(x, 'other-literal')) {
      return 0;
    } else {
      return 1;
    }
  } else {
    return 2;
  }
}

function f3(x, y) {
  return x === y;
}

for (var i = 0; i < 5; ++i) f0();
%OptimizeFunctionOnNextCall(f0);
assertEquals(1, f0());

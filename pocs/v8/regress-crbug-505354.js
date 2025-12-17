function f() {
  "use strict";
  try {
    for (let i = 0; i < 10; i++) {}
  } catch (e) {
  }
};
%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
f();

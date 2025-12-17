function f() {
  for (var __v_2 = 0; __v_2 < __v_5; ++__v_2) {
    for (var __v_5 = 0; __v_3 < 1; ++__v_8) {
      if (true || 0 > -6) continue;
      for (var __v_3 = 0; __v_3 < 1; ++__v_3) {
      }
    }
  }
};
%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
f();






























var __v_7 = {};
function __f_8(base, condition) {
  __v_7[base + 3] = 0;
  __v_7[base + 4] = 0;
  if (condition) {
    __v_7[base + 0] = 0;
    __v_7[base + 5] = 0;
  } else {
    __v_7[base + 0] = 0;
    __v_7[base + 18] = 0;
  }
};
%PrepareFunctionForOptimization(__f_8);
__f_8(1, true);
__f_8(1, false);
%OptimizeFunctionOnNextCall(__f_8);
__f_8(5, false);

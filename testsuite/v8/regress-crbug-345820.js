





var __v_6 = {};
__v_6 = new Int32Array(5);
for (var i = 0; i < __v_6.length; i++) __v_6[i] = 0;

function __f_7(N) {
  for (var i = -1; i < N; i++) {
    __v_6[i] = i;
  }
};
%PrepareFunctionForOptimization(__f_7);
__f_7(1);
%OptimizeFunctionOnNextCall(__f_7);
__f_7(__v_6.length);

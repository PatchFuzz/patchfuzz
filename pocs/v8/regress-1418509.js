var __v_0 = 5;
function __f_1() {
  for (var __v_6 = 0; __v_6 < __v_0; __v_6++) {
    if (__v_6 % __v_6 == 0) {
      "a".split();
    }
  }
}

%PrepareFunctionForOptimization(__f_1);
__f_1();
__f_1();
%OptimizeFunctionOnNextCall(__f_1);
__f_1();

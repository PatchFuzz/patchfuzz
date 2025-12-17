function __f_0(__v_2, __v_3) {
  return __v_2 + __v_3;
}
%PrepareFunctionForOptimization(__f_0);
const __v_0 = 'first';
const __v_1 = new String();
__f_0(__v_0, __v_1);
%OptimizeFunctionOnNextCall(__f_0);
__f_0();

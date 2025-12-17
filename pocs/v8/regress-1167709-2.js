function __f_0() {
}
function __f_3( __v_7, ...__v_8) {
  return new __f_0( ...__v_8);
}
function __f_5() {
  __f_3();
}
%PrepareFunctionForOptimization(__f_5);
__f_5();
%OptimizeFunctionOnNextCall(__f_5);
__f_5();

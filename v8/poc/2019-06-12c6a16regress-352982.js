




























function __f_4(i1) {
  return __v_3[i1] * __v_3[0];
};
%PrepareFunctionForOptimization(__f_4);
function __f_3(i1) {
  %PrepareFunctionForOptimization(__f_4);
  __f_4(i1);
  __f_4(i1 + 16);
  __f_4(i1 + 32);
  %OptimizeFunctionOnNextCall(__f_4);
  var x = __f_4(i1 + 993);
  return x;
}
function __f_5() {
  __v_3[0] = +__v_3[0];
  gc();
  __f_3(0) | 0;
  __v_3 = /\u23a1|x/;
  return 0;
}
var __v_3 = new Float32Array(1000);
__f_5();
__f_5();
__f_5();

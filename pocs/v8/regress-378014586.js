function __f_3() {
  return 'aaaaaaaaaaaaaa';
}
function __f_4() {
  return 'bbbbbbbbbbbbbb';
}
function __f_5() {
  return __f_3() + __f_4();
}
function __f_6(__v_9) {
  return __v_9 + __f_5();
}
%PrepareFunctionForOptimization(__f_6);
__f_6("");
%OptimizeFunctionOnNextCall(__f_6);
var __v_8 = __f_6("");
__v_8.replace(/d1/g);
__v_8.replace(/d1/g);

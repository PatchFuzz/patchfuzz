function __f_1() {
  return 'aaaaaaaaaaaaaa';
}
function __f_2() {
  return 'bbbbbbbbbbbbbb';
}
function __f_3() {
  return __f_1() + (
  _temp = __f_2(), _temp);
}
function __f_4(__v_5) {
  return __v_5 + __f_3();
}
%PrepareFunctionForOptimization(__f_4);
__f_4("");
%OptimizeFunctionOnNextCall(__f_4);
var __v_4 = __f_4("");
__v_4.split(/a/);
__v_4.split(/a/);

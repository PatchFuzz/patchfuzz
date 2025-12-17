function __f_4(a, b) {}
function __f_8(n) {
  return __f_4(arguments[13], arguments[-10]);
};
%PrepareFunctionForOptimization(__f_8);
function __f_6(a) {
  return __f_8(0, a);
}
__f_8(0);
__f_8(0);
%OptimizeFunctionOnNextCall(__f_8);
__f_8(0);

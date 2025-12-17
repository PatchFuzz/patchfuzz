__v_0 = new Uint8ClampedArray(10);
for (var i = 0; i < 10; i++) {
  __v_0[i] = 0xAA;
}
function __f_12(__v_6) {
  if (__v_6 < 0) {
    __v_1 = __v_0[__v_6 + 10];
    return __v_1;
  }
};
%PrepareFunctionForOptimization(__f_12);
print(0xAA, __f_12(-1));
%OptimizeFunctionOnNextCall(__f_12);
print(0xAA, __f_12(-1));

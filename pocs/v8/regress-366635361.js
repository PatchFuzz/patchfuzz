const __v_0 = new d8.test.FastCAPI();
function __f_2(__v_5) {
    __v_0.copy_string(__v_5, __v_5);
}
  %PrepareFunctionForOptimization(__f_2);
  __f_2();
  %OptimizeFunctionOnNextCall(__f_2);
  print(
      () => __f_2('Hello World'), Error,
      'Invalid parameter, the second parameter has to be a a Uint8Array.');

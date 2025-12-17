const __v_7 = new d8.test.FastCAPI();

function __f_3(__v_12) {
  const __v_13 = new Uint8Array();
    __v_7.copy_string(__v_12, __v_13);
}
  %PrepareFunctionForOptimization(__f_3);
  __f_3('Hello');
  %OptimizeFunctionOnNextCall(__f_3);
  print(() => __f_3('Hello'), Error, 'Invalid parameter, destination array is too small.');

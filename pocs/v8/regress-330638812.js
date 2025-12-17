function __f_16(arg) {
  switch (arg) {
    case 1:
      let let_var = 1;
    case 1:
      __v_16 = let_var;
  }
}
%PrepareFunctionForOptimization(__f_16);
__f_16(3);
%OptimizeFunctionOnNextCall(__f_16);
__f_16();

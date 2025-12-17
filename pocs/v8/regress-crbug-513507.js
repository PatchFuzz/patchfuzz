function makeFun() {
  function fun(osr_fuse) {
    for (var i = 0; i < 3; ++i) {
      if (i == osr_fuse) %OptimizeOsr();
    }
    for (var i = 3; i < 6; ++i) {
      if (i == osr_fuse) %OptimizeOsr();
    }
  }
  %PrepareFunctionForOptimization(fun);
  return fun;
}
%PrepareFunctionForOptimization(makeFun);

makeFun()(7);  
makeFun()(4);  
makeFun()(1);  

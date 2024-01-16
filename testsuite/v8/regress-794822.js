





function* opt(arg = () => arg) {
  let tmp = opt.x;  
  for (;;) {
    arg;
    yield;
    function inner() {
      tmp;
    }
    break;
  }
};
%PrepareFunctionForOptimization(opt);
opt();
%OptimizeFunctionOnNextCall(opt);
opt();

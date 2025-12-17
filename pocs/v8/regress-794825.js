function* opt() {
  
  
  for (;;)
    if (true) {
    } else {
      yield;
    }

  
  
  
  for (;;)
    if (true) {
    } else {
      yield;
    }
};
%PrepareFunctionForOptimization(opt);
opt();


%OptimizeFunctionOnNextCall(opt);
opt();
print(opt);

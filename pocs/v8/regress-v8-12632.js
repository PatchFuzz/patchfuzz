function opt() {
  const array = [-1, 1];
  array.shift();
}

%PrepareFunctionForOptimization(opt);
opt();
opt();
%OptimizeFunctionOnNextCall(opt);
opt();
opt();

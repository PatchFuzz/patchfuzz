function f(x) {
  return x === +x;
};
%PrepareFunctionForOptimization(f);
print(false, f(undefined));
print(false, f(undefined));
%OptimizeFunctionOnNextCall(f);
print(false, f(undefined));  

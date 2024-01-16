





function f(x) {
  return x === +x;
};
%PrepareFunctionForOptimization(f);
assertEquals(false, f(undefined));
assertEquals(false, f(undefined));
%OptimizeFunctionOnNextCall(f);
assertEquals(false, f(undefined));  

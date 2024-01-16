





function f(a) {
  return [a];
};
%PrepareFunctionForOptimization(f);
assertEquals([23], f(23));
assertEquals([42], f(42));
%OptimizeFunctionOnNextCall(f);
assertEquals([65], f(65));

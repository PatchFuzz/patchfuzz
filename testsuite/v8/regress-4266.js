





function test() {
  try {
    [].foo();
  } catch (e) {
    return e.message;
  }
};
%PrepareFunctionForOptimization(test);
assertEquals("[].foo is not a function", test());
%OptimizeFunctionOnNextCall(test);
assertEquals("[].foo is not a function", test());

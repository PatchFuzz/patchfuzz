function test() {
  try {
    [].foo();
  } catch (e) {
    return e.message;
  }
};
%PrepareFunctionForOptimization(test);
print("[].foo is not a function", test());
%OptimizeFunctionOnNextCall(test);
print("[].foo is not a function", test());


























if (isNeverOptimizeLiteMode()) {
  print("Warning: skipping test that requires optimization in Lite mode.");
  testRunner.quit(0);
}

(function ArgumentsObjectChange() {
  function f(x) {
    x = 42;
    return f.arguments[0];
  };
  %PrepareFunctionForOptimization(f);
  %EnsureFeedbackVectorForFunction(f);
  f(0);
  %OptimizeFunctionOnNextCall(f);
  assertEquals(42, f(0));
})();

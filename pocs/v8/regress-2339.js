function simple() {
  return simple_two_args(0, undefined);
}

function simple_two_args(always_zero, always_undefined) {
  var always_five = always_undefined || 5;
  return always_zero * always_five * .5;
}
%EnsureFeedbackVectorForFunction(simple_two_args);


%PrepareFunctionForOptimization(simple);
simple();
simple();
%OptimizeFunctionOnNextCall(simple);
simple();
print(simple);
gc();

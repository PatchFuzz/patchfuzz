




























function f(deopt, osr) {
  var result = "result";
  %Call(function() {}, 0, 0);
  var dummy = deopt + 0;
  for (var i = 0; osr && i < 2; i++) {
    %PrepareFunctionForOptimization(f);
    %OptimizeOsr();
  }
  return result;
}

%PrepareFunctionForOptimization(f);
assertEquals("result", f(3, false));
assertEquals("result", f(3, false));
%OptimizeFunctionOnNextCall(f);
assertEquals("result", f("foo", true));

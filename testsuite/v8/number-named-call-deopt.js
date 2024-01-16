




























function f(x, deopt, osr) {
  var res = "result";
  void x.toString(10, deopt + 0);
  if (osr)
    for (var i = 0; i < 100000; i++) {
    }
  return res;
};
%PrepareFunctionForOptimization(f);
f(4, 0, false);
f(4, 0, false);
f(4, 0, false);
%OptimizeFunctionOnNextCall(f);
assertEquals("result", f(4, "deopt", true));

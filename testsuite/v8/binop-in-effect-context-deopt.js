




























(function BinopInEffectContextDeoptAndOsr() {
  function f(a, deopt, osr) {
    var result = (a + 10, "result");
    var dummy = deopt + 0;
    for (var i = 0; osr && i < 2; i++) {
      %PrepareFunctionForOptimization(f);
      %OptimizeOsr();
    }
    return result;
  }

  %PrepareFunctionForOptimization(f);
  assertEquals("result", f(true, 3, false));
  assertEquals("result", f(true, 3, false));
  %OptimizeFunctionOnNextCall(f);
  assertEquals("result", f(true, "foo", true));
})();


(function BinopInEffectContextLazyDeopt() {
  function deopt_f() {
    %DeoptimizeFunction(f);
    return "dummy";
  }

  function h() {
    return { toString : deopt_f };
  }

  function g(x) {
  }

  function f() {
    return g(void(h() + ""));
  };
  %PrepareFunctionForOptimization(f);

  f();
  %OptimizeFunctionOnNextCall(f);
  f();
})();

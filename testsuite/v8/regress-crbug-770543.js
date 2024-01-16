





(function FunctionCallerFromInlinedBuiltin() {
  function f() {
    function g() {
      Object.getOwnPropertyDescriptor(g, "caller");
    };
    [0].forEach(g);
  };
  %PrepareFunctionForOptimization(f);
  f();
  f();
  %OptimizeFunctionOnNextCall(f);
  f();
})();

(function FunctionArgumentsFromInlinedBuiltin() {
  function g() {
    g.arguments;
  }
  function f() {
    [0].forEach(g);
  };
  %PrepareFunctionForOptimization(f);
  f();
  f();
  %OptimizeFunctionOnNextCall(f);
  f();
})();

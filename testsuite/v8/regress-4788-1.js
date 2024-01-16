





var f = (function() {
  "use asm";
  function foo(x) {
    return x == 0;
  }
  return foo;
})();

%PrepareFunctionForOptimization(f);

function deopt(f) {
  return {
    toString : function() {
      %DeoptimizeFunction(f);
      return "2";
    }
  };
}

%OptimizeFunctionOnNextCall(f);
assertFalse(f(deopt(f)));

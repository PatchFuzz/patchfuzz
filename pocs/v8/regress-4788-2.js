var f = (function() {
  "use asm";
  function foo(x) {
    return x < x;
  }
  return foo;
})();

%PrepareFunctionForOptimization(f);

function deopt(f) {
  return {
    toString: function() {
      %DeoptimizeFunction(f);
      return "2";
    }
  };
}

%OptimizeFunctionOnNextCall(f);
print(f(deopt(f)));

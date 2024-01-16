





(function InlinedThrowAtEndOfTry() {
  function g() {
    %DeoptimizeFunction(f);
    throw "boom";
  }
  function f() {
    try {
      g();  
    } catch (e) {
      assertEquals('boom', e);
    }
  };
  %PrepareFunctionForOptimization(f);
  assertDoesNotThrow(f);
  assertDoesNotThrow(f);
  %OptimizeFunctionOnNextCall(f);
  assertDoesNotThrow(f);
})();

(function InlinedThrowInFrontOfTry() {
  function g() {
    %DeoptimizeFunction(f);
    throw "boom";
  }
  function f() {
    g();  
    try {
      Math.random();
    } catch (e) {
      assertUnreachable();
    }
  };
  %PrepareFunctionForOptimization(f);
  assertThrows(f);
  assertThrows(f);
  %OptimizeFunctionOnNextCall(f);
  assertThrows(f);
})();

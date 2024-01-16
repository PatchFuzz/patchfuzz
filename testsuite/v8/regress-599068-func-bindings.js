






(function f() {
  function assignSloppy() {
    f = 0;
  }
  assertDoesNotThrow(assignSloppy);

  function assignStrict() {
    'use strict';
    f = 0;
  }
  assertThrows(assignStrict, TypeError);

  function assignStrictLookup() {
    eval("'use strict'; f = 1;");
  }
  assertThrows(assignStrictLookup, TypeError);
})();



(function f() {
  function assignSloppy() {
    f += "x";
  };
  %PrepareFunctionForOptimization(assignSloppy);
  assertDoesNotThrow(assignSloppy);
  assertDoesNotThrow(assignSloppy);
  %OptimizeFunctionOnNextCall(assignSloppy);
  assertDoesNotThrow(assignSloppy);

  function assignStrict() {
    'use strict';
    f += "x";
  };
  %PrepareFunctionForOptimization(assignStrict);
  assertThrows(assignStrict, TypeError);
  assertThrows(assignStrict, TypeError);
  %OptimizeFunctionOnNextCall(assignStrict);
  assertThrows(assignStrict, TypeError);
})();

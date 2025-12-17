(function f() {
  function assignSloppy() {
    f = 0;
  }
  print(assignSloppy);

  function assignStrict() {
    'use strict';
    f = 0;
  }
  print(assignStrict, TypeError);

  function assignStrictLookup() {
    eval("'use strict'; f = 1;");
  }
  print(assignStrictLookup, TypeError);
})();



(function f() {
  function assignSloppy() {
    f += "x";
  };
  %PrepareFunctionForOptimization(assignSloppy);
  print(assignSloppy);
  print(assignSloppy);
  %OptimizeFunctionOnNextCall(assignSloppy);
  print(assignSloppy);

  function assignStrict() {
    'use strict';
    f += "x";
  };
  %PrepareFunctionForOptimization(assignStrict);
  print(assignStrict, TypeError);
  print(assignStrict, TypeError);
  %OptimizeFunctionOnNextCall(assignStrict);
  print(assignStrict, TypeError);
})();

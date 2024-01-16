































(function () {
  var forceDeopt = 0;
  function inner(x) {
    "use strict";
    x = 2;
    
    
    %DebugPrint(arguments[0]);
    forceDeopt + 1;
    return arguments[0];
  };
  %PrepareFunctionForOptimization(inner);
  assertEquals(1, inner(1));
  assertEquals(1, inner(1));
  %OptimizeFunctionOnNextCall(inner);
  assertEquals(1, inner(1));
  forceDeopt = "not a number";
  assertEquals(1, inner(1));
})();





(function () {
  var forceDeopt = 0;
  function inner(x) {
    "use strict";
    x = 2;
    
    
    %DebugPrint(arguments[0]);
    forceDeopt + 1;
    return arguments[0];
  }

  function outer(x) {
    return inner(x);
  };
  %PrepareFunctionForOptimization(outer);
  assertEquals(1, outer(1));
  assertEquals(1, outer(1));
  %OptimizeFunctionOnNextCall(outer);
  assertEquals(1, outer(1));
  forceDeopt = "not a number";
  assertEquals(1, outer(1));
})();





(function () {
  var forceDeopt = 0;
  function inner(x, y, z) {
    "use strict";
    x = 3;
    
    
    %DebugPrint(arguments[0]);
    forceDeopt + 1;
    return arguments[0];
  }

  function middle(x) {
    "use strict";
    x = 2;
    return inner(10 * x, 20 * x, 30 * x) + arguments[0];
  }

  function outer(x) {
    return middle(x);
  };
  %PrepareFunctionForOptimization(outer);
  assertEquals(21, outer(1));
  assertEquals(21, outer(1));
  %OptimizeFunctionOnNextCall(outer);
  assertEquals(21, outer(1));
  forceDeopt = "not a number";
  assertEquals(21, outer(1));
})();

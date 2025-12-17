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
  print(1, inner(1));
  print(1, inner(1));
  %OptimizeFunctionOnNextCall(inner);
  print(1, inner(1));
  forceDeopt = "not a number";
  print(1, inner(1));
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
  print(1, outer(1));
  print(1, outer(1));
  %OptimizeFunctionOnNextCall(outer);
  print(1, outer(1));
  forceDeopt = "not a number";
  print(1, outer(1));
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
  print(21, outer(1));
  print(21, outer(1));
  %OptimizeFunctionOnNextCall(outer);
  print(21, outer(1));
  forceDeopt = "not a number";
  print(21, outer(1));
})();

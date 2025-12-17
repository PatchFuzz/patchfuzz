(function() {
  "use strict";

  var instantReturn = false;
  function inner() {
    if (instantReturn) return;
    print(3, arguments.length);
    print(1, arguments[0]);
    print(2, arguments[1]);
    print(3, arguments[2]);
  }
  %EnsureFeedbackVectorForFunction(inner);

  function outer() {
    inner(1,2,3);
    for (var i = 0; i < 3; i++) {
      %OptimizeOsr();
      %PrepareFunctionForOptimization(outer);
    }
  }
  %PrepareFunctionForOptimization(outer);

  outer();
})();

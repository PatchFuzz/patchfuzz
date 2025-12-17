function genM() {
  "use strict";
  return function () {
    return this.field;
  };
}

function genR() {
  var x = {
    field: 10
  }
  return x;
}

method = {};
receiver = {};

method = genM("A");
receiver = genR("A");

var foo = (function () {
  return function suspect (name) {
    "use strict";
    return method.apply(receiver, arguments);
  }
})();
%PrepareFunctionForOptimization(foo);

foo("a", "b", "c");
foo("a", "b", "c");
foo("a", "b", "c");
%OptimizeFunctionOnNextCall(foo);
foo("a", "b", "c");

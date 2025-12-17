(function sloppyPackedArguments() {
  function f(a) {
    for (var i = 0; i < 2; i++) {
      a[i] = 0;
    }
  }
  var boom;
  function g() {
    var a = arguments;
    f(a);
    boom = a[5];
    print(undefined, boom);
  }

  f([]);
  g(1);
})();

(function strictPackedArguments() {
  "use strict";
  function f(a) {
    for (var i = 0; i < 2; i++) {
      a[i] = 0;
    }
  }
  var boom;
  function g() {
    var a = arguments;
    f(a);
    boom = a[5];
    print(undefined, boom);
  }

  f([]);
  g(1);
})();

function empty() {}

function baz(expected, found) {
  var start = "";
  found.length, start + 'x';
  if (expected.length === found.length) {
    for (var i = 0; i < expected.length; ++i) {
      empty(found[i]);
    }
  }
}

baz([1], new class A extends Array {}());

(function () {
  "use strict";
  function bar() {
    baz([1, 2], arguments);
  }
  function foo() {
    bar(2147483648, -[]);
  };
  %PrepareFunctionForOptimization(foo);
  foo();
  foo();
  %OptimizeFunctionOnNextCall(foo);
  foo();
})();

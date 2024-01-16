





(function() {
'use strict';

function baz() {
  'use asm';
  function f() {}
  return {f: f};
}

function foo(x) {
  baz(x);
  %DeoptimizeFunction(foo);
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
})();

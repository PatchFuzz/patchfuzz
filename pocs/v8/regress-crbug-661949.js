var foo = function() {
  'use asm';
  function foo() {
    ''[0];
  };
  %PrepareFunctionForOptimization(foo);
  return foo;
}();

foo();
%OptimizeFunctionOnNextCall(foo);
foo();

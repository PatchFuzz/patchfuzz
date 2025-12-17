var foo = (function() {
  return eval("(function bar() { return 1; })");
})();
%PrepareFunctionForOptimization(foo);

%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();

print(foo);

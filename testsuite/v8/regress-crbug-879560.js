





function foo() {
  var x = 1;
  x = undefined;
  while (x--)
    ;
};
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();

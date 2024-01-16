





function foo() {
  var a = {b: -1.5};
  for (var i = 0; i < 1; i++) {
    a.b = 1;
  }
  assertTrue(0 <= a.b);
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();

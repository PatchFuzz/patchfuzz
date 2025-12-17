function foo() {
  var a = new Array(2);
  a[0] = 23.1234;
  a[1] = 25.1234;
  %DeoptimizeNow();
  return a[2];
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();

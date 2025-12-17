function foo() {
  function bar() {};
  %PrepareFunctionForOptimization(bar);
  return bar;
}



;
%PrepareFunctionForOptimization(foo);
var bar = foo();
%OptimizeFunctionOnNextCall(bar);



%OptimizeFunctionOnNextCall(foo);



bar = null;
for (var i = 0; i < 6; i++) {
  gc();
}



foo()();

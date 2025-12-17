var foo = 0;

function bar() {
  var baz = 0 - {};
  if (foo > 24) return baz * 0;
};
%PrepareFunctionForOptimization(bar);
bar();
bar();
%OptimizeFunctionOnNextCall(bar);
bar();

function foo() {
  return [undefined].map(Math.asin);
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();


function bar(b) {
  return [undefined].map(x => b ? Math.asin(x) : "string");
};
%PrepareFunctionForOptimization(bar);
bar(true);
bar(false);
bar(true);
bar(false);
%OptimizeFunctionOnNextCall(bar);
bar(true);

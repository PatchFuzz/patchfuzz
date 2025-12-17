function bar(x) {
  foo([]);
}
function foo(arr) {
  arr.forEach(bar);
}

foo([]);
%PrepareFunctionForOptimization(foo);
%PrepareFunctionForOptimization(bar);
foo([]);
bar([]);
foo([]);
%OptimizeFunctionOnNextCall(foo);
foo([]);

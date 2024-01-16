




























function foo(x, y) {
  return Math.floor(x / y);
}

function bar(x, y) {
  return foo(x + 1, y + 1);
};
%PrepareFunctionForOptimization(bar);
foo(16, "4");

bar(64, 2);
%OptimizeFunctionOnNextCall(bar);
bar(64, 2);

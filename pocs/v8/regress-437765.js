function foo(x, y) {
  return Math.floor(x / y);
}

function bar(x, y) {
  return foo(x + 1, y + 1);
}

function baz() {
  bar(64, 2);
};
%PrepareFunctionForOptimization(baz);
baz();
baz();
%OptimizeFunctionOnNextCall(baz);
baz();

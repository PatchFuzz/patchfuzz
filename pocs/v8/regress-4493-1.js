function baz(x, f) {
  return x.length;
};

function bar(x, y) {
  if (y) {}
  baz(x, function() {
    return x;
  });
};

function foo(x) {
  bar(x, '');
};
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo(['a']);

function print(expected, found) {
  if (found === expected) {
  } else if (expected !== expected && found !== found) {
  }
}

function foo() {
  var x = {var : 0.5};
  print(x, x.val);
  return () => x;
};
%PrepareFunctionForOptimization(foo);
foo(1);
foo(1);
%OptimizeFunctionOnNextCall(foo);
foo(1);

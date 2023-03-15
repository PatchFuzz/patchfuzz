





function foo(a) {
  if (a.length > 0) {}
}
%PrepareFunctionForOptimization(foo);
foo(false);
foo(false);
foo(4);
%OptimizeMaglevOnNextCall(foo);
print(foo);

Object.prototype[1] = 1;
function foo(baz) {
  return 1 in arguments;
}
print(foo(0));
%PrepareFunctionForOptimization(foo);
print(foo(0));
%OptimizeFunctionOnNextCall(foo);
print(foo(0));

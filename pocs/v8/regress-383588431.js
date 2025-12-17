let slot = 0;
function foo(a) {
  slot = a;
}
%PrepareFunctionForOptimization(foo);
foo(0x4fffffff);
%OptimizeFunctionOnNextCall(foo);
foo();

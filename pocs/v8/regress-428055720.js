function foo(inc) {
  let val = -2147483642 + inc;
}

%PrepareFunctionForOptimization(foo);
foo(42);
%OptimizeFunctionOnNextCall(foo);
print(() => foo(Symbol()));

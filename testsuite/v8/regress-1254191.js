





function f(a) {
  let x = -1n;
  if (!a) {
    x = a;
  }
  x|0;
}

%PrepareFunctionForOptimization(f);
f(false);
%OptimizeFunctionOnNextCall(f);
assertThrows(() => f(true), TypeError);

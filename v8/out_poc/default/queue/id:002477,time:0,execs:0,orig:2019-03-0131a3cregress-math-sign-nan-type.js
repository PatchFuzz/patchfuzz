





function f(a) {
  return Math.sign(+a) < 2;
}

%PrepareFunctionForOptimization(f);
f(NaN);
f(NaN);
%OptimizeFunctionOnNextCall(f);
print(f(NaN));

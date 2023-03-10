





function f(a) {
  return arguments[0];
}

%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
print(undefined, f());

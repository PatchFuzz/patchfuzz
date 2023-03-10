





function f(str) {
  return str.startsWith();
}

%PrepareFunctionForOptimization(f);
print(f('undefined'), true);
%OptimizeFunctionOnNextCall(f);
print(f('undefined'), true);

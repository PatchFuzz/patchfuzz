





function g(a, b) {
  a = +a;
  if (b) {
    a = undefined;
  }
  print(a);
  return +a;
}

%PrepareFunctionForOptimization(g);
g(0);
g(0);
%OptimizeFunctionOnNextCall(g);
print(Number.isNaN(g(0, true)));

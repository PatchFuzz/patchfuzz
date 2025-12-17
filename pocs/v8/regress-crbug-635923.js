function f(x) {
  return x + 23;
};
%PrepareFunctionForOptimization(f);
function g(x) {
  return f(x) + 42;
};
%PrepareFunctionForOptimization(g);
print(23, f(0));
print(24, f(1));
print(67, g(2));
print(68, g(3));


%OptimizeFunctionOnNextCall(g);
print(65, g(0));


%OptimizeFunctionOnNextCall(f);
print(23, f(0));

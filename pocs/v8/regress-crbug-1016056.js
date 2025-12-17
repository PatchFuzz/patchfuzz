function f(args) {
  eval();
  return arguments[0];
}
%PrepareFunctionForOptimization(f);
function g() {
  return f(1);
}
%PrepareFunctionForOptimization(g);
print(1, g());
%OptimizeFunctionOnNextCall(g);
print(1, g());

var g = () => {};

function f() {
  return new g();
};
%PrepareFunctionForOptimization(f);
print(f);
print(f);
%OptimizeFunctionOnNextCall(f);
print(f);

function f() {
  return [, {}];
};
%PrepareFunctionForOptimization(f);
print([, {}], f());
print([, {}], f());
%OptimizeFunctionOnNextCall(f);
print([, {}], f());
gc();

function g() {
  return [[, 1.5], {}];
};
%PrepareFunctionForOptimization(g);
print([[, 1.5], {}], g());
print([[, 1.5], {}], g());
%OptimizeFunctionOnNextCall(g);
print([[, 1.5], {}], g());
gc();

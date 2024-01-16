




























function f() {
  return [, {}];
};
%PrepareFunctionForOptimization(f);
assertEquals([, {}], f());
assertEquals([, {}], f());
%OptimizeFunctionOnNextCall(f);
assertEquals([, {}], f());
gc();

function g() {
  return [[, 1.5], {}];
};
%PrepareFunctionForOptimization(g);
assertEquals([[, 1.5], {}], g());
assertEquals([[, 1.5], {}], g());
%OptimizeFunctionOnNextCall(g);
assertEquals([[, 1.5], {}], g());
gc();

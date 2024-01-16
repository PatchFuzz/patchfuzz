





function f(x) {
  return x + 23;
};
%PrepareFunctionForOptimization(f);
function g(x) {
  return f(x) + 42;
};
%PrepareFunctionForOptimization(g);
assertEquals(23, f(0));
assertEquals(24, f(1));
assertEquals(67, g(2));
assertEquals(68, g(3));


%OptimizeFunctionOnNextCall(g);
assertEquals(65, g(0));


%OptimizeFunctionOnNextCall(f);
assertEquals(23, f(0));

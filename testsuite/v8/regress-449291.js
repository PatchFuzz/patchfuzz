





a = {
  y: 1.5
};
a.y = 1093445778;
b = a.y;
c = {
  y: {}
};

function f() {
  return {y: b};
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
assertEquals(f().y, 1093445778);

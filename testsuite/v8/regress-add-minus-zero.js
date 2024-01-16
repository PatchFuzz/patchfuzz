




























var o = { a: 0 };

function f(x) {
  return -o.a + 0;
};
%PrepareFunctionForOptimization(f);
;
assertEquals('Infinity', String(1 / f()));
assertEquals('Infinity', String(1 / f()));
%OptimizeFunctionOnNextCall(f);
assertEquals('Infinity', String(1 / f()));

var o = { a: 0 };

function f(x) {
  return -o.a + 0;
};
%PrepareFunctionForOptimization(f);
;
print('Infinity', String(1 / f()));
print('Infinity', String(1 / f()));
%OptimizeFunctionOnNextCall(f);
print('Infinity', String(1 / f()));

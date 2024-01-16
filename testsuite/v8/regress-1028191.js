





"use strict";

function f(a, b, c) {
  let x = BigInt.asUintN(64, a + b);
  try {
    x + c;
  } catch(_) {
    eval();
  }
  return x;
}

%PrepareFunctionForOptimization(f);
assertEquals(f(3n, 5n), 8n);
assertEquals(f(8n, 12n), 20n);
%OptimizeFunctionOnNextCall(f);
assertEquals(f(2n, 3n), 5n);

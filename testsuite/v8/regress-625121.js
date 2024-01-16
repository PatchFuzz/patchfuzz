





function test(f) {
  %PrepareFunctionForOptimization(f);
  f(0);
  f(NaN);
  %OptimizeFunctionOnNextCall(f);
  f(1.0);
}

test(x => Math.cosh(+x));
test(x => Math.sinh(+x));
test(x => Math.tanh(+x));

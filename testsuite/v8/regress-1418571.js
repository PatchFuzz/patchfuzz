





let v0 = "description";
for (const v1 in v0) {
  function f2(a3) {
    v0[v1];
    do {
      --v0;
    } while (a3 < 6)
  }
  %PrepareFunctionForOptimization(f2);
  %OptimizeFunctionOnNextCall(f2);
  f2();
}

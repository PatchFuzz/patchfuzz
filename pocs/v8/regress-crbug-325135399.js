const v2 = 0;

if (true) {
 function f35() {
    const v39 = true;
    [,...o36] = "p";
    v39["p"] = v2;
    eval();
  }
  %PrepareFunctionForOptimization(f35);
  f35();
  %OptimizeFunctionOnNextCall(f35);
  f35();
}

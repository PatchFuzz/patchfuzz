let i = 0;
function f() {
  i++;
  if (i > 10) {
    %PrepareFunctionForOptimization(f);
    %OptimizeFunctionOnNextCall(f);
  }

  new Promise(f);
  return f.x;
}
f();







function optimize(crankshaft_test) {
  %PrepareFunctionForOptimization(crankshaft_test);
  crankshaft_test();
  crankshaft_test();
  %OptimizeFunctionOnNextCall(crankshaft_test);
  crankshaft_test();
}

function f() {
  var v1 = 0;
  var v2 = -0;
  var t = v2++;
  v2++;
  return Math.max(v2++, v1++);
}

optimize(f);

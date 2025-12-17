function runtest(max) {
  var that = new Object();
  that["function" + (max - 1)]();
}
function f(max) {
  try {
    runtest(30);
  } catch (e) {}
}
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();

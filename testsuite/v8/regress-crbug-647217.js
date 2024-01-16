





var source = "return 1" + new Array(2048).join(' + a') + "";
eval("function g(a) {" + source + "}");

function f(a) {
  return g(a);
};
%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
try {
  f(0);
} catch (e) {
}

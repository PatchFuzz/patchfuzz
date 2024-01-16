





function f() {
  var v = arguments[0];
}
function g() {
  f();
};
%PrepareFunctionForOptimization(g);
g();
g();
%OptimizeFunctionOnNextCall(g);
g();

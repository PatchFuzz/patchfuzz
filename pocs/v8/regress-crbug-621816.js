function f() {
  var o = {};
  o.a = 1;
}
function g() {
  var o = {['a']: function() {}};
  f();
};
%PrepareFunctionForOptimization(g);
f();
f();
%OptimizeFunctionOnNextCall(g);
g();

function f(deopt) {
  var x = 1;
  if (deopt) {
    x = x + "foo";
    gc();
  }
  this.x = x;
}

function g(deopt) {
  return new f(deopt);
};
%PrepareFunctionForOptimization(g);
print({x: 1}, g(false));
print({x: 1}, g(false));
%OptimizeFunctionOnNextCall(g);
print({x: '1foo'}, g(true));

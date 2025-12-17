function f(x) {
  var v = x;
  for (i = 0; i < 1; i++) {
    v.apply(this, arguments);
  }
};
%PrepareFunctionForOptimization(f);
function g() {}

f(g);
f(g);
%OptimizeFunctionOnNextCall(f);
print(function() {
  f('----');
}, TypeError);

function f(a) {  
  var n = 1 + a;
}

function g() {
  f();
  var d = {x: f()};
  return [d];
};
%PrepareFunctionForOptimization(g);
g();
g();
%OptimizeFunctionOnNextCall(g);
g();







var global = {};

function do_nothing() {}

function f(opt_gc) {
  var x = new Array(3);
  x[0] = 10;
  opt_gc();
  global[1] = 15.5;
  return x;
};
%PrepareFunctionForOptimization(f);
gc();
global = f(gc);
global = f(do_nothing);
%OptimizeFunctionOnNextCall(f);
global = f(do_nothing);

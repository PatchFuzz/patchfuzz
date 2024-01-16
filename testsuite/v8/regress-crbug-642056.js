





function f(o) {
  return o.x instanceof Array;
};
%PrepareFunctionForOptimization(f);
var o = {x: 1.5};
o.x = 0;

f(o);
f(o);
%OptimizeFunctionOnNextCall(f);
f(o);

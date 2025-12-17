function f(o) {
  return o.x;
};
%PrepareFunctionForOptimization(f);
var o1 = {x: 1};
var o2 = {__proto__: {x: 2}};

f(o2);
f(o2);
f(o2);
f(o1);
%OptimizeFunctionOnNextCall(f);
print(1, f(o1));
print(2, f(o2));

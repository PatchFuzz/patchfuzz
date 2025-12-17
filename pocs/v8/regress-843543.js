const o = {
  x: 9
};
o.__proto__ = Array.prototype;

function foo(o) {
  return o.indexOf(undefined);
};
%PrepareFunctionForOptimization(foo);
print(-1, foo(o));
print(-1, foo(o));
%OptimizeFunctionOnNextCall(foo);
print(-1, foo(o));

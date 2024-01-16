





const o = {
  x: 9
};
o.__proto__ = Array.prototype;

function foo(o) {
  return o.indexOf(undefined);
};
%PrepareFunctionForOptimization(foo);
assertEquals(-1, foo(o));
assertEquals(-1, foo(o));
%OptimizeFunctionOnNextCall(foo);
assertEquals(-1, foo(o));

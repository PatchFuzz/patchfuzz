





function f(v) {
  return v.b;
}
var v = { a: 10, b: 10.23 };
%PrepareFunctionForOptimization(f);
f(v);
%OptimizeFunctionOnNextCall(f);
f(v);
assertOptimized(f);
v.b = {x: 20};
assertEquals(f(v).x, 20);

assertUnoptimized(f);

function f0(v) {
  return v.b;
}
var v0 = { b: 10.23 };
%PrepareFunctionForOptimization(f0);
f0(v0);

v0.b = {};
v0.b = 0;
%OptimizeFunctionOnNextCall(f0);
f0(v0);
assertEquals(f0(v0), 0);

function f(v) {
  return v.b;
}
var v = { a: 10, b: 10.23 };
%PrepareFunctionForOptimization(f);
f(v);
%OptimizeFunctionOnNextCall(f);
f(v);
print(f);
v.b = {x: 20};

print(f);
print(f(v).x, 20);

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
print(f0(v0), 0);

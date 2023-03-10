





function f() {
  const a = {'x': 5};
  a.x = {};
  Object.freeze(a);
  return Object.is(a.x, 5)
}

%PrepareFunctionForOptimization(f);
print(f());
print(f());
%OptimizeFunctionOnNextCall(f);
print(f());
print(f);

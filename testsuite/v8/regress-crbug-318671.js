




























function add(x, y) {
  return x + y;
};
%PrepareFunctionForOptimization(add);
print(add({ a: 1 }, "a"));
print(add({ b: 1 }, "b"));
print(add({ c: 1 }, "c"));

%OptimizeFunctionOnNextCall(add);

print(add("a", 1));

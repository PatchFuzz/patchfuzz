function h(a, b) {
  var r = a + b;
  function X() {
    return 42;
  }
  return r + X();
};
%PrepareFunctionForOptimization(h);
for (var i = 0; i < 5; i++) h(1, 2);

%OptimizeFunctionOnNextCall(h);

print(45, h(1, 2));
print("foo742", h("foo", 7));
